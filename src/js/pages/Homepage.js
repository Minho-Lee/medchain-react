import React, { Component } from 'react';

import LoginSection from '../components/HomePageComponents/LoginSection';
import WelcomeSection from '../components/HomePageComponents/WelcomeSection';

class HomePage extends Component {
	formSubmit = (props) => {
		console.log(props);
	}
	
	render() {
		return (
			<div className="container">
				<WelcomeSection />
				<LoginSection onFormSubmit={this.formSubmit}/>
			</div>
		);
	}
}

export { HomePage };
