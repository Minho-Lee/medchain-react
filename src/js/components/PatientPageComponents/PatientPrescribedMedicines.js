import React from 'react';

import PatientPrescribedMedicineList from './PatientPrescribedMedicineList';


export default class PatientPrescribedMedicines extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Patient Prescribed Medicines </h1>
				<PatientPrescribedMedicineList />
			</div>
		);
	}
}