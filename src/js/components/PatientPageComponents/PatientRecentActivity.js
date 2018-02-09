import React, { Component } from 'react';

import PatientRecentActivityList from './PatientRecentActivityList';

export default class PatientRecentActivity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recentActivities: this.props.recentActivities
		}
	}

	render() {
		return (
			<div className="container">
				<h1>Patient Recent Activity: </h1>
				<PatientRecentActivityList recentActivities={this.state.recentActivities}/>
			</div>
		);
	}
}