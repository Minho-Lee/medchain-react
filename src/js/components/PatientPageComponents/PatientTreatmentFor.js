import React, { Component } from 'react';

import DiseaseDropdown from './DiseaseDropdown';

export default class PatientTreatmentFor extends Component {
	render() {
		return (
			<div className="container">
				<h1>Patient Treatement For: </h1>
				<DiseaseDropdown />
			</div>
		);
	}
}