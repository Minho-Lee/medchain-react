import React from 'react';

export default class PresribedMedicine extends React.Component {
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