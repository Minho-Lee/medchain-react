import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
} from '../actions/types';

const INIT_STATE = {
	userid: '',
	password: '',
	loggedIn: false,
}

export default (state=INIT_STATE, action) => {
	switch (action.type){
		case LOGIN_USER: {
			console.log(action.payload);
			return { ...state,
								loggedIn: true
			}
		}

		default:
			return state;
	}
}