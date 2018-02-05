import React from 'react';

import DiseaseDropdown from './DiseaseDropdown';

export default class PatientTreatmentFor extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Patient Treatement For: </h1>
				<DiseaseDropdown />
			</div>
		);
	}
}