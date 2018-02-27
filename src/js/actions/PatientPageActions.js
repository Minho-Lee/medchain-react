import firebase from 'firebase';

import { 
	GET_ACTIVE_PATIENT_DATA,
	GET_ACTIVE_PATIENT_DATA_SUCCESS,
	GET_ACTIVE_PATIENT_DATA_FAIL,
	GET_ACTIVE_PATIENT_DATA_PIC,
	GET_ACTIVE_PATIENT_DATA_PIC_SUCCESS,
	GET_ACTIVE_PATIENT_DATA_PIC_FAIL
} from './types';


export const GetActivePatientData = () => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA');
	return (dispatch) => {
		dispatch({
			type: GET_ACTIVE_PATIENT_DATA,
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				const db = firebase.database();
				const currentUser = user;

				// get patient info
				const dbUserInfoRef = db.ref('users').child(currentUser.uid);
				dbUserInfoRef.once('value', snapshot => {
					GetActivePatientDataSuccess(dispatch, snapshot.val(), user);
				}).catch((error) => {
					GetActivePatientDataFail(dispatch);
				});
			}
			else {
				console.log('NOT LOGGED IN ');
			}
		});
	}
}
	

const GetActivePatientDataSuccess = (dispatch, val, user) => {
	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_SUCCESS,
		payload: val
	});

	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_PIC,
	});

	var pictureName;
	for(let key in val.PatientInfo) {
		pictureName = val.PatientInfo[key].pictureName
	} 

	// get profile pic from storage
	const storageRef = firebase.storage().ref('users').child(user.uid).child(pictureName);
	storageRef.getDownloadURL().then((url) => {
		GetActivePatientDataPicSuccess(dispatch, url);
	}).catch((error) => {
		console.log(error);
		GetActivePatientDataPicFail(dispatch);
	});
}

const GetActivePatientDataFail= (dispatch) => {
	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_FAIL,
		payload: "Error: Could not retrive patient data",
	});
}

const GetActivePatientDataPicSuccess = (dispatch, pic) => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA_PIC_SUCCESS');

	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_PIC_SUCCESS,
		payload: pic
	});
}

const GetActivePatientDataPicFail= (dispatch) => {
	console.log('dispatched: GET_ACTIVE_PATIENT_DATA_PIC_FAIL');
	dispatch({
		type: GET_ACTIVE_PATIENT_DATA_PIC_FAIL,
		payload: "Error: Could not retrive patient data picture",
	});
}

export const SavePatientDisease = ({disease}) => {
	const { currentUser } = firebase.auth();

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