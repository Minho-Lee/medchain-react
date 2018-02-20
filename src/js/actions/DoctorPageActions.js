import firebase from 'firebase';

import { POST_DOCTOR_PERSCRIPTION, FETCH_PATIENT_DATA } from './types';

export const PostDoctorPrescription = ({selMed, docCom}) => {
	return {
		type: POST_DOCTOR_PERSCRIPTION,
		payload: {
			selMed,
			docCom
		}
	}
};

export const FetchPatientData = ( name ) => {
	console.log('Fetching Patient Data!');
	const { currentUser } = firebase.auth();
	console.log(currentUser);
	console.log('name: ' + name);
	// NTS: ReduxThunk is used for Async calls
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/${name}`)
			//on() is persistent (similar to websocket), make to close later
			.on('value', snapshot => {
				//snapshot is the object that describes what data is in that ref
				dispatch({ type: FETCH_PATIENT_DATA, payload: snapshot.val() });
			})
	}
	
};