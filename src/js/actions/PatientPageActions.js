import firebase from 'firebase';

import { 
	GET_ACTIVE_PATIENT_DATA,
	SAVE_PATIENT_DATA
} from './types';

export const GetActivePatientData = (id) => {
	return {
		type: GET_ACTIVE_PATIENT_DATA,
		payload: {
			id
		}
	}
};

export const SaveToFirebase = ({name, age, occupation, address, phone, email,
																medPrescribed, recentActivities}) => {
	const { currentUser } = firebase.auth();
	console.log(currentUser);
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/${name}`)
			.push({age, occupation, address, phone, email,
						 medPrescribed, recentActivities})
			.then(() => {
				dispatch({
					type: SAVE_PATIENT_DATA,
				});
				console.log('Patient Data Saved!');
			})
	}
}