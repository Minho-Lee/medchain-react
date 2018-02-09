import firebase from 'firebase';

import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
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
				console.log(user);
				loginUserSuccess(dispatch, user);
			})
			.catch((error) => {
				console.log(error);
				firebase.auth().createUserWithEmailAndPassword(userid, password)
					.then((user) => loginUserSuccess(dispatch, user))
					.catch((error) => loginUserFail(dispatch));
			})
	}

	// return {
	// 	type: LOGIN_USER,
	// 	payload: {
	// 		userid,
	// 		password,
	// 	}
	// }
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

