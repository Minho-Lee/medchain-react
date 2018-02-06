import React from 'react';

import LoginSection from '../components/HomePageComponents/LoginSection';
import WelcomeSection from '../components/HomePageComponents/WelcomeSection';

export default class Homepage extends React.Component {
	render() {
		return (
			<div className="container">
				<WelcomeSection />
				<LoginSection />
			</div>
		);
	}
}