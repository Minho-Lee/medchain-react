import React from 'react';
import RecentActivity from './RecentActivity';

export default class PatientRecentActivityList extends React.Component {

	constructor() {
		super();

		// dummy values
		this.state = {
			recentActivities: [
				{
					id: "1",
					date: "10 days ago",
					comment: "Appointment Booked"
				},
				{
					id: "2",
					date: "5 days ago",
					comment: "Prescription Added: Leo.."
				},
				{
					id: "3",
					date: "2 days ago",
					comment: "comment 3"
				},
				{
					id: "4",
					date: "1 days ago",
					comment: "Prescription added: ACE Inhibitor Anti-Depressant"
				}
			]
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