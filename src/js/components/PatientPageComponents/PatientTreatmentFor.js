import React, { Component } from 'react';

import DiseaseDropdown from './DiseaseDropdown';

export default class PatientTreatmentFor extends Component {
	render() {
		return (
	      <div className="info-header-wrapper"> 
	        <h3 className="info-header">Needs Treatement For: </h3> 
				<DiseaseDropdown />
			</div>
		);
	}
}