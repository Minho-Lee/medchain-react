import React, { Component } from 'react';

export default class PatientMetaData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			patientAddress: this.props.address,
			patientPhoneNumber: this.props.phone,
			patientEmail: this.props.email
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