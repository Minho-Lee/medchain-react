import firebase from 'firebase';

export const SaveDoctorPrescription = ({selMed, docCom}, user) => {
	return (dispatch) => {
		var today = new Date().toJSON().slice(0,10).replace(/-/g,'/');

		const { currentUser } = user;
		const dbRefDisease = firebase.database().ref('users').child(currentUser.uid).child('MedPrescribed');
		const dbRefRecAct = firebase.database().ref('users').child(currentUser.uid).child('RecentActivity');


		dbRefDisease.push({
			medPrescribed: selMed,
			doctorComments: docCom,
			date: today
		});

		dbRefRecAct.push({
			comment: "Appointment Booked: " + docCom,
			date: today
		});

	}
};