import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED
} from '../actions/types';

const INIT_STATE = {
	userid: '',
	password: '',
	loggedIn: false,
}

export default (state=INIT_STATE, action) => {
	switch (action.type){
		case LOGIN_USER: {
			console.log('LOGGING IN!');
			return { ...state,
								userid: '',
								password: '',
								loggedIn: true
			}
		}
		case USER_CHANGED: {
			return { ...state, userid: action.payload }
		}
		case PASSWORD_CHANGED: {
			return { ...state, password: action.payload }
		}
		default:
			return state;
	}
}