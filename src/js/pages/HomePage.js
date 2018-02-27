import React, { Component } from 'react';

import LoginSection from '../components/HomePageComponents/LoginSection';
import WelcomeSection from '../components/HomePageComponents/WelcomeSection';

export default class HomePage extends Component {
	render() {
		return (
			<div className="container" id='main-container'>
				<WelcomeSection />
				<LoginSection />
			</div>
		);
	}
}
