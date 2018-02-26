import firebase from 'firebase';

import { 
	GET_ACTIVE_PATIENT_DATA,
	GET_ACTIVE_PATIENT_DATA_SUCCESS,
	GET_ACTIVE_PATIENT_DATA_FAIL
} from './types';


export const GetActivePatientData = () => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA');
	return (dispatch) => {
		dispatch({
			type: GET_ACTIVE_PATIENT_DATA,
		});

		firebase.auth().onAuthStateChanged((user) => {
			console.log('onAuthStateChanged Triggered!');
			if (user) {
				console.log('STILL LOGGED IN');

				const db = firebase.database();
				const currentUser = user;

				const dbUserInfoRef = db.ref('users').child(currentUser.uid);

				dbUserInfoRef.once('value', snapshot => {
					GetActivePatientDataSuccess(dispatch, snapshot.val());
				}).catch((error) => {
					GetActivePatientDataFail(dispatch);
				});
			}
			else {
				console.log('NOT LOGGED IN ');
			}
		})
	}
}
	

const GetActivePatientDataSuccess = (dispatch, user) => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA_SUCCESS');

	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_SUCCESS,
		payload: user
	});
}

const GetActivePatientDataFail= (dispatch) => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA_FAIL');
	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_FAIL,
		payload: "Error: Could not retrive patient data",
	});
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