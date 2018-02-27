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
		var numDisplayed = 0;
		const recentActivityComponents = this.state.recentActivities.map((recentActivity) => {
			if(numDisplayed < 10) {
				numDisplayed++;
				return <RecentActivity key={recentActivity.id} {...recentActivity}/>;
			}
		});

		return (
			<div className="recAct">
        		<ul className="activity-list">{recentActivityComponents}</ul> 
			</div>
		);
	}
}