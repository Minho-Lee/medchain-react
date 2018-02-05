import React from 'react';

import PatientRecentActivityList from './PatientRecentActivityList';

export default class PatientRecentActivity extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Patient Recent Activity: </h1>
				<PatientRecentActivityList />
			</div>
		);
	}
}