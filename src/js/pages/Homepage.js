import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginSection from '../components/HomePageComponents/LoginSection';
import WelcomeSection from '../components/HomePageComponents/WelcomeSection';

import * as actions from '../actions';

class HomePage extends Component {
	formSubmit = (user) => {
		// console.log(user);
		this.props.loginUser({ userid: user.userid, 
													 password: user.password });
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
const mapStateToProps = (state) => {
	return {
		userid: state.auth.userid,
		password: state.auth.password,
		loggedIn: state.auth.loggedIn,
	};
}

export default connect(mapStateToProps, actions)(HomePage);
