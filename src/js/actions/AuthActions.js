import firebase from 'firebase';

import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	REGISTER_USER_INFO,
	REGISTER_USER_INFO_SUCCESS,
	REGISTER_USER_INFO_FAIL
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
				// console.log(user);
				loginUserSuccess(dispatch, user);	
			})
			.catch((error) => {
				// For now, only going to be dealing with users that are already registered.
				// Hence, no new registration will be accepted (perhaps registration will be implemented in future)
				loginUserFail(dispatch);
				// console.log(error);
				// firebase.auth().createUserWithEmailAndPassword(userid, password)
				// 	.then((user) => loginUserSuccess(dispatch, user))
				// 	.catch((error) => {
				// 		console.log(error);
				// 		loginUserFail(dispatch)
				// 	});
			}
		);

		// authentication listner to handle page refresh, login/logout
		// firebase.auth().onAuthStateChanged(firebaseUser => {
		// 	if(firebaseUser) {
		// 		console.log(firebaseUser);
		// 	} else {
		// 		console.log("Not logged in anymore");
		// 	}
		// });
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

export const RegisterNewUser = ({ email, password, address, name, age, occupation, phone }) => {
	return (dispatch) => {
		dispatch({
			type: REGISTER_USER,
		});

		// register user
		firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
			dispatch({
				type: REGISTER_USER_SUCCESS
			});

			dispatch({
				type: REGISTER_USER_INFO
			});

			// put user with patient info in database
			const dbRefUser = firebase.database().ref('users').child(user.uid).child("PatientInfo");

			dbRefUser.push({
				email,
				address,
				name,
				age,
				occupation,
				phone
			});

			dispatch({
				type: REGISTER_USER_INFO_SUCCESS
			});

		}).catch((error) => {
			console.log(error);
			dispatch({
				type: REGISTER_USER_INFO_FAIL
			});
		});

	}
}

