import React from 'react';
import { connect } from 'react-redux';
import { store } from '../stores/store';

import { push } from 'react-router-redux';
import { Button, 
		 Form, 
		 FormGroup, 
		 Input
 } from 'reactstrap';

import * as actions from '../actions';

import '../../scss/PatDocPage.css';  


class RegistrationPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			address: '',
			age: 0,
			name: '',
			occupation: '',
			phone: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;

		this.props.RegisterNewUser({...data});
		store.dispatch(push('/patient'));
	}

	onEmailChange = (event) => {
		this.setState({
			email: event.target.value
		});
	}

	onPasswordChange = (event) => {
		this.setState({
			password: event.target.value
		});
	}

	onAddressChange = (event) => {
		this.setState({
			address: event.target.value 
		});
	}

	onAgeChange = (event) => {
		this.setState({
			age: event.target.value
		});
	}

	onNameChange = (event) => {
		this.setState({
			name: event.target.value 
		});
	}

	onOccupationChange = (event) => {
		this.setState({
			occupation: event.target.value
		});
	}

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value
		});
	}

	render() {
		return (
			<div className="registration-form">
	        	<Form className="container" onSubmit={this.handleSubmit}> 
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Email</h3> 
						<Input type="text" name="email" id="email" onChange={this.onEmailChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Password</h3> 
						<Input type="text" name="password" id="password" onChange={this.onPasswordChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Address</h3> 
						<Input type="text" name="address" id="address" onChange={this.onAddressChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Age</h3> 
						<Input type="text" name="age" id="age" onChange={this.onAgeChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Name</h3> 
						<Input type="text" name="name" id="name" onChange={this.onNameChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Occupation</h3> 
						<Input type="text" name="occupation" id="occupation" onChange={this.onOccupationChange} />
					</FormGroup>
					<FormGroup className="info-header-wrapper">
            			<h3 className="info-header">Phone</h3> 
						<Input type="text" name="phone" id="phone" onChange={this.onPhoneChange} />
					</FormGroup>
         			<Button className="submitBtn"  type="submit">Submit Registration</Button> 
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, actions)(RegistrationPage);
