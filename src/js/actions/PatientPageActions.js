import firebase from 'firebase';

import { 
	GET_ACTIVE_PATIENT_DATA,
	GET_ACTIVE_PATIENT_DATA_SUCCESS,
	GET_ACTIVE_PATIENT_DATA_FAIL
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

		dbUserInfoRef.once('value', snapshot => {
			GetActivePatientDataSuccess(dispatch, snapshot.val());
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
		type: GET_ACTIVE_PATIENT_DATA_FAIL,
		payload: "Error: Could not retrive patient data",
	});
}

export const SaveToFirebase = ({name, age, occupation, address, phone, email,
																medPrescribed, recentActivities}) => {
	const { currentUser } = firebase.auth();

	// var a = 'f5BupJmEkYhQ93DNZt7XWrr8rW22';
	// var name = 'Zahaan Khan';
	// var age = 22;
	// var occupation = 'Software Engineer';
	// var address = '29 Spooner Street'
	// var phone = '225 345 7890';
	// var email = 'zahaan@gmail.com';
	// var medPrescribed = [];
	// var recentActivities = [];

	/* MSG FOR MINHO : Incase I forget to tell you, dont turn this shit on lol,
	 * This function creates users on the fly. For now, for simplicity, lets leave it
	 * that each user is a patient. And there can only be one account per patient
	 * remind me to talk to you about this function, but for now, just leave it off homie
	 */
	return (dispatch) => {
		// firebase.database().ref(`/users/${a}/PatientInfo`)
		// 	.push({name, age, occupation, address, phone, email,
		// 				 medPrescribed, recentActivities})
		// 	.then(() => {
		// 		dispatch({
		// 			type: SAVE_PATIENT_DATA,
		// 		});
		// 		console.log('Patient Data Saved!');
		// 	})
	}
}

export const SavePatientDisease = ({disease}) => {
	const { currentUser } = firebase.auth();
	console.log(currentUser);

	var today = new Date().toJSON().slice(0,10).replace(/-/g,'/');

	return (dispatch) => {
		const dbRefDisease = firebase.database().ref('users').child(currentUser.uid).child('Diseases');
		const dbRefRecAct = firebase.database().ref('users').child(currentUser.uid).child('RecentActivity');

		dbRefDisease.push({
				disease,
				date: today
		});

		dbRefRecAct.push({
			comment: 'Patient has new disease: ' + disease,
			date: today
		});
	}
}