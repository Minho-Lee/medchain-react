import React, { Component } from 'react';

import PatientPrescribedMedicineList from './PatientPrescribedMedicineList';

export default class PatientPrescribedMedicines extends Component {
	constructor(props) {
		super(props);

		this.state = {
			medPrescribed: this.props.medPrescribed
		}
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
				medPrescribed: nextProps.medPrescribed 
		});	
	}

	render() {
		return (
			<div>
				<h1>Patient Prescribed Medicines </h1>
				<PatientPrescribedMedicineList medPrescribed={this.state.medPrescribed}/>
			</div>
		);
	}
}