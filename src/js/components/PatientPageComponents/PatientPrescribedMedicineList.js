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
		const medicinesPrescribedComponents = this.state.medPrescribed.map((medicine) => {
			return <PrescribedMedicine key={medicine.id} {...medicine}/>;
		});

		return (
			<div>
				<ul>{medicinesPrescribedComponents}</ul>
			</div>
		);
	}
}