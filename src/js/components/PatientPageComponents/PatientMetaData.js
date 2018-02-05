import React, { Component } from 'react';

export default class PatientMetaData extends Component {
	constructor() {
		super();

		this.state = {
			patientAddress: "288 Spadina Road",
			patientPhoneNumber: "(416) 338-1882",
			patientEmail: "zahaank24@gmail.com"
		}
	}

	render() {
		var patientAddress = this.state.patientAddress,
			patientPhoneNumber = this.state.patientPhoneNumber,
			patientEmail = this.state.patientEmail;
		return(
			<div className="container">
				<div>
					<i className="fa fa-home fa-3x" />
					<h3>{patientAddress}</h3>
				</div>
				<div>
					<i className="fa fa-phone fa-3x" />
					<h3>{patientPhoneNumber}</h3>
				</div>
				<div>
					<i className="fa fa-envelope fa-3x" />
					<h3>{patientEmail}</h3>
				</div>
			</div>
		);
	}

}