import React, { Component } from 'react';

export default class RecentActivity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: this.props.date,
			comment: this.props.comment
		}
	}

	render() {
		return (
			<li>
				<span><b>{this.state.date}</b></span>
				<span> {this.state.comment} </span>
			</li>
		);
	}
}