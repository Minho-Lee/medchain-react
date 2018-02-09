import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	InputGroup,
	InputGroupAddon,
	Input,
	Button,
	Form,
	FormGroup,
	Label } from 'reactstrap';

import * as actions from '../../actions';

class LoginSection extends Component {
	//Reduxifying this component into a container. user/pw is kept at store

	handleFormSubmit = (event) => {
		// const { userid, password } = this.props;
		this.props.loginUser(this.props);
		event.preventDefault();
	}

	handleUseridChange = (event) => {
		this.props.userChanged(event.target.value);
	}

	handlePasswordChange = (event) => {
		this.props.passwordChanged(event.target.value);
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

					<Button type='submit' onClick={this.handleFormSubmit}>Submit</Button>
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
	};
}

export default connect(mapStateToProps, actions)(LoginSection);