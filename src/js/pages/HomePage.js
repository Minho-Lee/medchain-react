import React, { Component } from 'react';

import LoginSection from '../components/HomePageComponents/LoginSection';
import WelcomeSection from '../components/HomePageComponents/WelcomeSection';

import '../../scss/HomePage.css'

export default class HomePage extends Component {
	render() {
		return (
			<div className="container">
				<WelcomeSection />
				<LoginSection />
			</div>
		);
	}
}
