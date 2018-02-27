import React, { Component } from 'react';
import PrescribedMedicine from './PrescribedMedicine';

export default class PatientPrescribedMedicineList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			medPrescribed: this.props.medPrescribed
		}
	}


	componentWillReceiveProps = (nextProps) => {
		if(nextProps.medPrescribed) {
			this.setState({
				medPrescribed: nextProps.medPrescribed
			});	
		}

	}

	render() {
		var numDisplayed = 0;
		const medicinesPrescribedComponents = this.state.medPrescribed.map((medicine) => {
			if(numDisplayed < 5) {
				numDisplayed++;
				return <PrescribedMedicine key={medicine.id} {...medicine}/>;
			}
		});

		return (
      		<div className="patient-info-list"> 
				<ul>{medicinesPrescribedComponents}</ul>
			</div>
		);
	}
}