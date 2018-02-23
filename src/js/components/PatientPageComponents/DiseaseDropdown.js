import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, 
		 Form, 
		 FormGroup, 
		 Label, 
		 Input
 } from 'reactstrap';

import { store } from '../../stores/store';
import * as actions from '../../actions/PatientPageActions';

class DiseaseDropdown extends Component {

	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onSelectedDiseaseChange = this.onSelectedDiseaseChange.bind(this);

		this.state = {
			disease: 'Hepatitis'
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {
			disease: this.state.disease
		}
		this.props.SavePatientDisease({...data}, this.props.user);
		store.dispatch(push('/doctor'));
	}

	onSelectedDiseaseChange(event) {
		event.preventDefault();
		this.setState({
			disease: event.target.value 
		});
	}


	render() {
		return(
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Input type="select" name="selectedDisease" id="selectedDisease" onChange={this.onSelectedDiseaseChange}>
							<option value="Hepatitis">Hepatitis</option>
							<option value="Hypothyroidism">Hypothyroidism</option>
							<option value="Depression">Depression</option>
							<option value="ACL TEAR">ACL Tear</option>
						</Input>
					</FormGroup>
					<Button className="submitToDoctor" type="submit">Submit Disease</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
	return {
		user: state.auth.user,
	}
}

const bindActionsToDispath = (dispatch) => (
	{
		SavePatientDisease: (disease) => dispatch(actions.SavePatientDisease(disease))
	}
);

export default connect(mapStateToProps, bindActionsToDispath)(DiseaseDropdown);
