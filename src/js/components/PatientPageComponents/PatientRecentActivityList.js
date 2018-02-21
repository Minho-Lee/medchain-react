import React, { Component } from 'react';
import RecentActivity from './RecentActivity';

export default class PatientRecentActivityList extends Component {

	constructor(props) {
		super(props);

		// dummy values
		this.state = {
			recentActivities: this.props.recentActivities
		}
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.recentActivities) {
			this.setState({
				recentActivities: nextProps.recentActivities
			});
		}
	}

	render() {

		const recentActivityComponents = this.state.recentActivities.map((recentActivity) => {
			return <RecentActivity key={recentActivity.id} {...recentActivity}/>;
		});

		return (
			<div className="container">
				<ul>{recentActivityComponents}</ul>
			</div>
		);
	}
}