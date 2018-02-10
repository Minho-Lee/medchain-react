import { POST_DOCTOR_PERSCRIPTION } from './types';

export const PostDoctorPrescription = ({selMed, docCom}) => {
	return {
		type: POST_DOCTOR_PERSCRIPTION,
		payload: {
			selMed,
			docCom
		}
	}
};