import React, { Component } from 'react';

import DiseaseDropdown from './DiseaseDropdown';

export default class PatientTreatmentFor extends Component {
	render() {
		return (
			<div className="container patient-dta">
				<h3 className="patient-info-header">Needs Treatement For: </h3>
				<DiseaseDropdown />
			</div>
		);
	}
}