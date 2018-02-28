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
			phone: '',
			picture: null,
			errors: {
				email: '',
				password: '',
				address: '',
				age: '',
				name: '',
				occupation: '',
				phone: '',
				picture: ''
			},
			emailValid: false,
			passwordValid: false,
			addressValid: false,
			ageValid: false,
			nameValid: false,
			occupationValid: false,
			phoneValid: false,
			pictureValid: false,
			formValid: false
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;

		this.validateForm();
		// console.log(data);
		if (this.state.formValid) {
			this.props.RegisterNewUser({...data});
			// store.dispatch(push('/patient'));	
		}		
	}

	onUserInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		}, () => { this.validateField(name, value) });
	}

	onPicChange = (event) => {
		var picture = event.target.files[0];
		this.setState({
			picture 
		});
		this.validateField('picture', picture);
	}

	validateField = (fieldName, value) => {
		let fieldValidationErrors = this.state.errors;
		let { emailValid, passwordValid, addressValid, ageValid, 
					nameValid, occupationValid,phoneValid, pictureValid } = this.state;
		// console.log(fieldValidationErrors);
		switch(fieldName) {
			case 'email': {
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				break;
			}
			case 'password': {
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '' : 'is too short';
				break;
			}
			case 'address': {
				addressValid = value.match(/([0-9]+)[a-zA-Z]{0,1}\s+([a-zA-Z])+\s+([a-zA-Z]){2,10}[.]?/);
				fieldValidationErrors.address = addressValid ? '' : 'is invalid (ie. 123 ABC Road)';
				break;
			}
			case 'age' : {
				ageValid = 0 < value && value < 100;
				fieldValidationErrors.age = ageValid ? '' : 'is invalid (Please enter between 0 to 100)';
				break;
			}
			case 'name': {
				nameValid = value.match(/([a-z]+)/i);
				fieldValidationErrors.name = nameValid ? '' : 'is invalid';
				break;
			}
			case 'occupation': {
				occupationValid = value.match(/([a-z]+)/i);
				fieldValidationErrors.occupation = occupationValid ? '' : 'is invalid';
				break;
			}
			case 'phone': {
				phoneValid = value.match(/([0-9]{2,3})(\s+|[-])([0-9]{3,4})(\s+|[-])([0-9]{3,4})/);
				fieldValidationErrors.phone = phoneValid ? '' : 'is invalid (ie. 416-123-4567)';
				break;
			}
			case 'picture': {
				pictureValid = value !== null;
				fieldValidationErrors.picture = pictureValid ? '' : 'is invalid (need picture)';
				break;
			}
			default:
				break;
		}
		this.setState({
			errors: fieldValidationErrors,
			emailValid,
			passwordValid,
			addressValid, 
			ageValid, 
			nameValid, 
			occupationValid,
			phoneValid, 
			pictureValid
		}, this.validateForm)
	}

	validateForm = () => {
		const { emailValid, passwordValid, addressValid, ageValid, 
					nameValid, occupationValid,phoneValid, pictureValid } = this.state;
		this.setState({
			formValid: emailValid && passwordValid && addressValid && ageValid && 
					nameValid && occupationValid && phoneValid && pictureValid
		})
	}

	renderError = (fieldName) => {
		if (this.state.errors[fieldName] !== '') {
			return (
				<p>{fieldName} {this.state.errors[fieldName]}</p>
			);
		} 
	}

	renderFormError = () => {
		if (!this.state.formValid) {
			return <p>Form is not valid! Please fill in all the info</p>;
		}
	}

	render() {
		return (
			<div className="registration-form pb-5">
				<Form className="container" onSubmit={this.handleSubmit}> 
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Email</h3> 
						<Input type="email" name="email" id="email" placeholder='email' onChange={this.onUserInputChange} />
						{this.renderError('email')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Password</h3> 
						<Input type="password" name="password" id="password" placeholder='password' onChange={this.onUserInputChange} />
						{this.renderError('password')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Address</h3> 
						<Input type="text" name="address" id="address" placeholder='address' onChange={this.onUserInputChange} />
						{this.renderError('address')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Name</h3> 
						<Input type="text" name="name" id="name" placeholder='name' onChange={this.onUserInputChange} />
						{this.renderError('name')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Age</h3> 
						<Input type="text" name="age" id="age" placeholder='age' onChange={this.onUserInputChange} />
						{this.renderError('age')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Occupation</h3> 
						<Input type="text" name="occupation" id="occupation" placeholder='occupation' onChange={this.onUserInputChange} />
						{this.renderError('occupation')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Phone Number</h3> 
						<Input type="text" name="phone" id="phone" placeholder='phone #' onChange={this.onUserInputChange} />
						{this.renderError('phone')}
					</FormGroup>
					<FormGroup className="info-header-wrapper">
						<h3 className="info-header">Photo</h3> 
						<Input type="file" name="picture" id="pic" onChange={this.onPicChange} />
						{this.renderError('picture')}
					</FormGroup>
					<Button className="submitBtn"  type="submit">Submit Registration</Button>
					{this.renderFormError()}
				</Form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {}
// }

export default connect(null, actions)(RegistrationPage);
