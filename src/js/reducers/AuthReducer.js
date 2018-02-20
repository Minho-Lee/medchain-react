import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
} from '../actions/types';

const INIT_STATE = {
	error: '',
	userid: '',
	user: null,
	password: '',
	loggedIn: false,
	loading: false,
}

export default (state=INIT_STATE, action) => {
	switch (action.type){
		case LOGIN_USER: {
			console.log('Attempting to log in...');
			return { ...state, loading: true }
		}
		case USER_CHANGED: {
			return { ...state, userid: action.payload }
		}
		case PASSWORD_CHANGED: {
			return { ...state, password: action.payload }
		}
		case LOGIN_USER_SUCCESS: {
			return { ...state,
								// this is to clear out cached info on Redux app state so it doesn't store info
								...INIT_STATE,
								user: action.payload,
								loggedIn: true,
							}
		}
		case LOGIN_USER_FAIL: {
			return { ...state,
								error: 'Authentication failed',
								loggedIn: false,
								loading: false,
								password: '',
			}
		}
		default:
			return state;
	}
}