import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, 
		 Form, 
		 FormGroup, 
		 Input
 } from 'reactstrap';

import { store } from '../stores/store';
import * as actions from '../actions';

import PatientName from '../components/PatientPageComponents/PatientName'; 
import PatientMetaData from '../components/PatientPageComponents/PatientMetaData'; 

import '../../scss/PatDocPage.css'; 

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

	// When the page loads, grab the default data and set it into props
	componentDidMount = () => {
		this.props.GetActivePatientData();
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
						<FormGroup className="info-header-wrapper">
	            			<h3 className="info-header">Prescription</h3> 
							<Input type="select" name="selectedMedicine" id="selectedMedicine" onChange={this.onSelectedMedicineChange}>
								<option value="Levothyroxine">Levothyroxine</option>
								<option value="ACE Inhibitor">ACE Inhibitor</option>
								<option value="Anti-Depressant">Anti-Depressant</option>
								<option value="Insulin">Insulin</option>
							</Input>
						</FormGroup>
						<FormGroup className="info-header-wrapper">
	            			<h3 className="info-header">Doctor Comments: </h3> 
							<Input type="textarea" name="doctorComment" id="doctorComment" onChange={this.onDoctorCommentChange} />
						</FormGroup>
	         			<Button className="submitBtn"  type="submit">Submit To Pharmacist</Button> 
					</Form>
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

export default connect(mapStateToProps, actions)(DoctorPage);
