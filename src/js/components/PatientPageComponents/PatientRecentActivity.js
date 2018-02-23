import React, { Component } from 'react';

import PatientRecentActivityList from './PatientRecentActivityList';

export default class PatientRecentActivity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recentActivities: this.props.recentActivities
		}
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			recentActivities: nextProps.recentActivities
		});
	}

	render() {
		return (
		     <div className="container patient-data"> 
		       <h3 className="patient-info-header">Patient Recent Activity: </h3> 				<PatientRecentActivityList recentActivities={this.state.recentActivities}/>
			</div>
		);
	}
}