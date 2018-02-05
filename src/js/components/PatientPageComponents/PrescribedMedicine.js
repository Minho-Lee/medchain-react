import React, { Component } from 'react';

export default class PresribedMedicine extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MedicineName: this.props.medicine
		}
	}

	render() {
		return (
			<li>
				<span> {this.state.MedicineName} </span>
			</li>
		);
	}
}