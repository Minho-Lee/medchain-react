import React, { Component } from 'react';

export default class PresribedMedicine extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MedicineName: this.props.med
		}
	}

	render() {
		console.log(this.state.MedicineName)
		return (
			<li>
				<span> {this.state.MedicineName} </span>
			</li>
		);
	}
}