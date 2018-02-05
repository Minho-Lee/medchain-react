import React from 'react';
import RandomGuyImage from '../../../images/square-sample-face.jpg';

export default class PatientName extends React.Component {
	constructor() {
		super();

		this.state = {
			patientName: "Sukhpal",
			patientAge: 22,
			patientOccupation: "Software Developer",
			patientAddress: "288 Spadina Road",
			patientPhoneNumber: "(416) 338-1882",
			patientEmail: "zahaank24@gmail.com"
		}
	}

	render() {
		return (
			<div className="container">
				<img src={RandomGuyImage} />
				<h2>{this.state.PatientName}, {this.state.patientPhoneNumber}</h2>
				<h3>{this.state.patientOccupation}</h3>
			</div>

		);
	}
}