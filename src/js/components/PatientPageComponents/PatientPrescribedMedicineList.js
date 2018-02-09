import React, { Component } from 'react';
import PrescribedMedicine from './PrescribedMedicine';

export default class PatientPrescribedMedicineList extends Component {

	constructor(props) {
		super(props);

		// dummy values
		this.state = {
			MedicinesPrescribed: this.props.medPrescribed
		}
	}

	render() {
		console.log(this.state.MedicinesPrescribed);
		const medicinesPrescribedComponents = this.state.MedicinesPrescribed.map((medicine) => {
			console.log(medicine);
			return <PrescribedMedicine key={medicine.id} {...medicine}/>;
		});

		return (
			<div className="container">
				<ul>{medicinesPrescribedComponents}</ul>
			</div>
		);
	}
}