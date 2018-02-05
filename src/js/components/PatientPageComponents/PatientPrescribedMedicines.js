import React, { Component } from 'react';

import PatientPrescribedMedicineList from './PatientPrescribedMedicineList';


export default class PatientPrescribedMedicines extends Component {
	render() {
		return (
			<div className="container">
				<h1>Patient Prescribed Medicines </h1>
				<PatientPrescribedMedicineList />
			</div>
		);
	}
}