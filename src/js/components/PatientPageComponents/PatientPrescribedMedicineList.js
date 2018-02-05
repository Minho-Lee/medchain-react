import React, { Component } from 'react';
import PrescribedMedicine from './PrescribedMedicine';

export default class PatientPrescribedMedicineList extends Component {

	constructor() {
		super();

		// dummy values
		this.state = {
			MedicinesPrescribed: [
				{
					id: "1",
					medicine: "Ribavirin"
				},
				{
					id: "2",
					medicine: "Insulin"
				},
				{
					id: "3",
					medicine: "ACE Inhibitor"
				},
				{
					id: "4",
					medicine: "Anti-Depresesant"
				},
				{
					id: "5",
					medicine: "Levothyroxine"
				}
			]
		}
	}

	render() {

		const medicinesPrescribedComponents = this.state.MedicinesPrescribed.map((medicine) => {
			return <PrescribedMedicine key={medicine.id} {...medicine}/>;
		});

		return (
			<div className="container">
				<ul>{medicinesPrescribedComponents}</ul>
			</div>
		);
	}
}