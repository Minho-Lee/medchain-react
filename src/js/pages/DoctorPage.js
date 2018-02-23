import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, 
		 Form, 
		 FormGroup, 
		 Label, 
		 Input
 } from 'reactstrap';

import { store } from '../stores/store';
import * as actions from '../actions';

import PatientName from '../components/PatientPageComponents/PatientName'; 
import PatientMetaData from '../components/PatientPageComponents/PatientMetaData'; 
import { Link } from 'react-router-dom';

import '../../scss/PatientPage.css'; 

import { bindActionCreators } from 'redux';

class DoctorPage extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onSelectedMedicineChange = this.onSelectedMedicineChange.bind(this);
		this.onDoctorCommentChange = this.onDoctorCommentChange.bind(this);

		this.state = {
			dropdownOpen: false,
			selectedMedicine: "Levothyroxine",
			doctorComment: "",
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {
			selMed: this.state.selectedMedicine,
			docCom: this.state.doctorComment
		};

		this.props.SaveDoctorPrescription({...data});
		store.dispatch(push('/pharmacist'));
	}

	onSelectedMedicineChange(event) {
		event.preventDefault();
		this.setState({
			selectedMedicine: event.target.value 
		});
	}

	onDoctorCommentChange(event) {
		event.preventDefault();
		this.setState({
			doctorComment: event.target.value 
		});
	}

	render() {
		return(
			<div>
        <PatientName name={this.props.name} age={this.props.age} occupation={this.props.occupation}/> 
        <PatientMetaData address={this.props.address} phone={this.props.phone} email={this.props.email}/> 
        	<Form className="container" onSubmit={this.handleSubmit}> 
					<FormGroup>
            			<h3 className="patient-info-header">Prescription</h3> 
						<Input type="select" name="selectedMedicine" id="selectedMedicine" onChange={this.onSelectedMedicineChange}>
							<option value="Levothyroxine">Levothyroxine</option>
							<option value="ACE Inhibitor">ACE Inhibitor</option>
							<option value="Anti-Depressant">Anti-Depressant</option>
							<option value="Insulin">Insulin</option>
						</Input>
					</FormGroup>
					<FormGroup>
            			<h3 className="patient-info-header">Doctor Comments: </h3> 
						<Input type="textarea" name="doctorComment" id="doctorComment" onChange={this.onDoctorCommentChange} />
					</FormGroup>
         			<Button className="submitToDoctor"  type="submit">Submit To Pharmacist</Button> 
				</Form>
				{/*<Link to='/pharmacist'>
					<Button onClick={this.onButtonClick}>See a Pharmacist</Button>
				</Link>*/}
			</div>
		);
	}
}


const mapStateToProps = ( state ) => {
	return {
		user: state.auth.user,
		id: state.activePat.id, 
	    name: state.activePat.name, 
	    age: state.activePat.age, 
	    occupation: state.activePat.occupation, 
	    address: state.activePat.address, 
	    phone: state.activePat.phone, 
	    email: state.activePat.email
	}
}

const bindActionsToDispath = (dispatch) => (
	{
		SaveDoctorPrescription: (data) => dispatch(actions.SaveDoctorPrescription(data))
	}
);

export default connect(mapStateToProps, bindActionsToDispath)(DoctorPage);
