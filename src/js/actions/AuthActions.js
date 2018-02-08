import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
} from './types';

export const loginUser = ({ userid, password }) => {
	return {
		type: LOGIN_USER,
		payload: {
			userid,
			password
		}
	}
};
