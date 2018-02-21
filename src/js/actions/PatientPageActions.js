import firebase from 'firebase';

import { 
	GET_ACTIVE_PATIENT_DATA,
	GET_ACTIVE_PATIENT_DATA_SUCCESS,
	GET_ACTIVE_PATIENT_DATA_FAIL,
	SAVE_PATIENT_DATA
} from './types';


export const GetActivePatientData = () => {
	return (dispatch) => {
		dispatch({
			type: GET_ACTIVE_PATIENT_DATA
		});

		console.log('dispathed: GET_ACTIVE_PATIENT_DATA');

		const db = firebase.database();
		const { currentUser } = firebase.auth();
		const dbUserInfoRef = db.ref('users').child(currentUser.uid);


		let user;

		dbUserInfoRef.once('value', snapshot => {
			user = snapshot.val();
			GetActivePatientDataSuccess(dispatch, user);
		}).catch((error) => {
			GetActivePatientDataFail(dispatch);
		});
	}
}

const GetActivePatientDataSuccess = (dispatch, user) => {
	console.log('dispathed: GET_ACTIVE_PATIENT_DATA_SUCCESS');

	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_SUCCESS,
		payload: user
	});
}

const GetActivePatientDataFail= (dispatch) => {
	console.log('dispathed: GET_ACTIVE_PATIENT_DATA_FAIL');
	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_SUCCESS,
		payload: "Error: Could not retrive patient data",
	});
}

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