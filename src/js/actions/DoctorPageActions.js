import firebase from 'firebase';

export const SaveDoctorPrescription = ({selMed, docCom}) => {
	return (dispatch) => {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yy = today.getFullYear();

		today = dd + '/' + mm + '/' + yy;

		const { currentUser } = firebase.auth();
		const dbRef = firebase.database().ref('users').child(currentUser.uid).child('MedPrescribed');

		dbRef.push({
			medPrescribed: selMed,
			doctorComments: docCom,
			date: today
		});
	}
};