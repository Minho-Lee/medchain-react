 import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { 
	InputGroup,
	InputGroupAddon,
	Input,
	Button,
	Form,
	FormGroup,
	Label } from 'reactstrap';
import { Digital } from 'react-activity';

import { store } from '../../stores/store';
import * as actions from '../../actions';

class LoginSection extends Component {
	//Reduxifying this component into a container. user/pw is kept at store
	componentDidUpdate() {
		// const { router } = this.context;
		// console.log(router);
		if (this.props.loggedIn) {
			console.log('Redirect!');
			store.dispatch(push('/patient'));
		}	
	}

	handleFormSubmit = (event) => {
		// const { userid, password } = this.props;
		this.props.loginUser(this.props);
		event.preventDefault();
	}

	handleFormSubmitRegister = (event) => {
		event.preventDefault();
		store.dispatch(push('/registration'));
	}

	handleUseridChange = (event) => {
		this.props.userChanged(event.target.value);
	}

	handlePasswordChange = (event) => {
		this.props.passwordChanged(event.target.value);
	}

	renderError = () => {
		if (this.props.error) {
			return <p style={{ color: 'red' }}>{this.props.error}</p>;
		}
	}
	renderLoading = () => {
		if (this.props.loading) {
			return (
				<Digital size={20} />
			)
		} else {
			return (
				<div>
					<Button type='submit' onClick={this.handleFormSubmit}>Submit</Button>
					<Button type='submit' onClick={this.handleFormSubmitRegister}>Register</Button>
				</div>
			);
		}
	}
	render() { 
		return (
			<div>
				<h2 className='mt-3'>Login Section</h2>
				<Form>
					<FormGroup>
						<Label for='userid'>User ID</Label>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>@</InputGroupAddon>
							<Input type='text' name='userid' id='userid' placeholder='user ID'
										 onChange={this.handleUseridChange} value={this.props.userid}/>
						</InputGroup>
					</FormGroup>

					<FormGroup>
						<Label for='password'>Password</Label>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>*</InputGroupAddon>
							<Input type='password' name='password' id='password' placeholder='password'
										 onChange={this.handlePasswordChange} value={this.props.password} />
						</InputGroup>
					</FormGroup>
					{this.renderError()}
					{this.renderLoading()}
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userid: state.auth.userid,
		password: state.auth.password,
		loggedIn: state.auth.loggedIn,
		loading: state.auth.loading,
		error: state.auth.error,
	};
}

export default connect(mapStateToProps, actions)(LoginSection);