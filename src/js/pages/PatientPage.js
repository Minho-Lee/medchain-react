import React, { Component } from 'react';
import { connect } from 'react-redux';

import PatientName from '../components/PatientPageComponents/PatientName';
import PatientMetaData from '../components/PatientPageComponents/PatientMetaData';
import PatientPrescribedMedicines from '../components/PatientPageComponents/PatientPrescribedMedicines';
import PatientTreatmentFor from '../components/PatientPageComponents/PatientTreatmentFor';
import PatientRecentActivity from '../components/PatientPageComponents/PatientRecentActivity';

import * as actions from '../actions';

import { Button } from 'reactstrap';

class PatientPage extends Component {

	// When the page loads, grab the default data and set it into props
	componentDidMount = () => {
		this.props.GetActivePatientData(1);
	}

	render() {
		console.log(this.props);
		return (
			<div className="container">
				<PatientName name={this.props.name} age={this.props.age} occupation={this.props.occupation}/>
				<PatientMetaData address={this.props.address} phone={this.props.phone} email={this.props.email}/>
				<PatientPrescribedMedicines medPrescribed={this.props.medPrescribed}/>
				<PatientTreatmentFor />
				<PatientRecentActivity recentActivities={this.props.recentActivities}/>
				<Button>See a Doctor </Button>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		id: state.activePat.id,
		name: state.activePat.name,
		age: state.activePat.age,
		occupation: state.activePat.occupation,
		address: state.activePat.address,
		phone: state.activePat.phone,
		email: state.activePat.email,
		medPrescribed: state.activePat.medPrescribed,
		recentActivities: state.activePat.recentActivities
	};
}

export default connect(mapStateToProps, actions)(PatientPage);
