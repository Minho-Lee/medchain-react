import React from 'react';

import PatientName from '../components/PatientPageComponents/PatientName';
import PatientMetaData from '../components/PatientPageComponents/PatientMetaData';
import PatientPrescribedMedicines from '../components/PatientPageComponents/PatientPrescribedMedicines';
import PatientTreatmentFor from '../components/PatientPageComponents/PatientTreatmentFor';
import PatientRecentActivity from '../components/PatientPageComponents/PatientRecentActivity';

export default class PatientPage extends React.Component {
	render() {
		return (
			<div className="container">
				<PatientName />
				<PatientMetaData />
				<PatientPrescribedMedicines />
				<PatientTreatmentFor />
				<PatientRecentActivity />
				<button>See a Doctor </button>
			</div>
		);
	}
}