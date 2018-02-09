import { LOGIN_USER } from './types';

export const loginUser = ({ userid, password }) => {
	return {
		type: LOGIN_USER,
		payload: {
			userid,
			password,
		}
	}
};
