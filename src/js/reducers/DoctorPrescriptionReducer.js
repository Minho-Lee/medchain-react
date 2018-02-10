import { POST_DOCTOR_PERSCRIPTION } from '../actions/types';


// TODO: Get this inital state from DB, maybe make it a list of patients you can choose from
const INIT_STATE = {}

// TODO: This should POST to DB about the Doctor Prescription
export default (state=INIT_STATE, action) => {
	switch (action.type) {
		case POST_DOCTOR_PERSCRIPTION: {
			console.log(action.payload);
			return { ...state }
		}

		default:
			return state;
	}
}