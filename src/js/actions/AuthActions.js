import { 
	LOGIN_USER,
	USER_CHANGED,
	PASSWORD_CHANGED
} from './types';

export const loginUser = ({ userid, password }) => {
	return {
		type: LOGIN_USER,
		payload: {
			userid,
			password,
		}
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

