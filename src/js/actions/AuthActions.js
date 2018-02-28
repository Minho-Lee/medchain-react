import firebase from 'firebase';
import { push } from 'react-router-redux';

import { store } from '../stores/store';

import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL
} from './types';

export const loginUser = ({ userid, password }) => {
	// This is returning a f'n via ReduxThunk, and redux calls it.
	// Only after the user is logged in (callback) then the 'dispatch' is triggered which will
	// send the action to all the reducers
	// Using ReduxThunk, you can dispatch multiple actions
	return(dispatch) => {
		dispatch({
			type: LOGIN_USER,
		});
		// Only if user is authenticated, it will go into 'then()' which will trigger the dispatch
		firebase.auth().signInWithEmailAndPassword(userid, password)
			.then((user) => {
				loginUserSuccess(dispatch, user);	
			})
			.catch((error) => {
				loginUserFail(dispatch);
			}
		);
	}
};

export const userChanged = (text) => {
	return {
		type: USER_CHANGED,
		payload: text,
	}
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text,
	};
};

// Helper method to execute dispatch function since ReduxThunk gets clunky, bound for typos
const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL,
	});
}

export const RegisterNewUser = ({ email, password, address, name, age, occupation, phone, picture }) => {
	return (dispatch) => {
		dispatch({
			type: REGISTER_USER,
		});

		// register user
		firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
			dispatch({
				type: REGISTER_USER_SUCCESS
			});


			// put user with patient info in database
			const dbRefUser = firebase.database().ref('users').child(user.uid).child("PatientInfo");
			var pictureName = picture.name;
			dbRefUser.push({
				email,
				address,
				name,
				age,
				occupation,
				phone,
				pictureName
			})
			.then(() => {
				// add picture, if picture doesnt add pic, we call on default pic saved in the app
					if(picture) {
						//upload user image into firebase storage
						var storageRef = firebase.storage().ref('users').child(user.uid).child(pictureName);
						var task = storageRef.put(picture);

						//if we want to add image upload progress bar
						task.on('state_changed', (snapshot) => {
							var perc = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
							console.log(perc);
						})
					}
					setTimeout(() => {
						store.dispatch(push('/patient'));
					}, 3000);
				}
			);

			
		}).catch((error) => {
			console.log(error);
			dispatch({
				type: REGISTER_USER_FAIL
			});
		});

	}
}

