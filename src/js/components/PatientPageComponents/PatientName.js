import React, { Component } from 'react';
import RandomGuyImage from '../../../images/square-sample-face.jpg';

export default class PatientName extends Component {
	constructor(props) {
		super(props);

		this.state = {
			patientName: this.props.name,
			patientAge: this.props.age,
			patientOccupation: this.props.occupation
		}
	}

	render() {
		return (
			<div className="row">
				<div className='col-md-6'>
					<img className='mr-3' src={RandomGuyImage} height={300} alt="" />
				</div>
				<div className='col-md-6'>
					<h2>{this.state.patientName}, {this.state.patientAge}</h2>
					<h3>{this.state.patientOccupation}</h3>
				</div>
			</div>
		);
	}
}