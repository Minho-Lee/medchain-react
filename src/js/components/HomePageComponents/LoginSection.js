import React, { Component } from 'react';
import { 
	InputGroup,
	InputGroupAddon,
	Input,
	Button,
	Form,
	FormGroup,
	Label } from 'reactstrap';

class LoginSection extends Component {
	state = {
		userid: '',
		password: ''
	};

	handleFormSubmit = (event) => {
		this.props.onFormSubmit(this.state);
		this.setState({ userid: '', password: '' });
		event.preventDefault();
	}

	handleUseridChange = (event) => {
		this.setState({ userid : event.target.value });
	}

	handlePasswordChange = (event) => {
		this.setState({ password : event.target.value });
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
										 onChange={this.handleUseridChange} value={this.state.userid}/>
						</InputGroup>
					</FormGroup>

					<FormGroup>
						<Label for='password'>Password</Label>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>*</InputGroupAddon>
							<Input type='password' name='password' id='password' placeholder='password'
										 onChange={this.handlePasswordChange} value={this.state.password} />
						</InputGroup>
					</FormGroup>

					<Button type='submit' onClick={this.handleFormSubmit}>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default LoginSection;