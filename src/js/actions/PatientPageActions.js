import { GET_ACTIVE_PATIENT_DATA } from './types';

export const GetActivePatientData = (id) => {
	return {
		type: GET_ACTIVE_PATIENT_DATA,
		payload: {
			id
		}
	}
};