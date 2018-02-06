import React, { Component } from 'react';

import PatientName from '../components/PatientPageComponents/PatientName';
import PatientMetaData from '../components/PatientPageComponents/PatientMetaData';
import PatientPrescribedMedicines from '../components/PatientPageComponents/PatientPrescribedMedicines';
import PatientTreatmentFor from '../components/PatientPageComponents/PatientTreatmentFor';
import PatientRecentActivity from '../components/PatientPageComponents/PatientRecentActivity';

import { Button } from 'reactstrap';

class PatientPage extends Component {
	render() {
		return (
			<div className="container">
				<PatientName />
				<PatientMetaData />
				<PatientPrescribedMedicines />
				<PatientTreatmentFor />
				<PatientRecentActivity />
				<Button>See a Doctor </Button>
			</div>
		);
	}
}

export { PatientPage };