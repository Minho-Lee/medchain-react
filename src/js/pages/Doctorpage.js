import React, { Component } from 'react';

import { Button, 
		 Form, 
		 FormGroup, 
		 Label, 
		 Input
 } from 'reactstrap';

import * as actions from '../actions/DoctorPageActions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

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

		this.props.PostDoctorPrescription({...data});
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
				<h1>Doctor Page!</h1>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="doctorPrescribedMedicine">Prescription</Label>
						<Input type="select" name="selectedMedicine" id="selectedMedicine" onChange={this.onSelectedMedicineChange}>
							<option value="Levothyroxine">Levothyroxine</option>
							<option value="ACE Inhibitor">ACE Inhibitor</option>
							<option value="Anti-Depressant">Anti-Depressant</option>
							<option value="Insulin">Insulin</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="doctorComments">Doctor Comments: </Label>
						<Input type="textarea" name="doctorComment" id="doctorComment" onChange={this.onDoctorCommentChange} />
					</FormGroup>
					<Button type="submit">Submit To Pharmacist</Button>
				</Form>
			</div>
		);
	}
}

/*

 TODO: I found 2 ways of doing this, not sure which way is better
// https://medium.com/mofed/reduxs-mysterious-connect-function-526efe1122e4

*/

 // const mapDispatchToProps = (dispatch) => {
 // 	return bindActionCreators(actions, dispatch);
 // };



const bindActionsToDispath = (dispatch) => (
	{
		PostDoctorPrescription: (data) => dispatch(actions.PostDoctorPrescription(data))
	}
);

export default connect(null, bindActionsToDispath)(DoctorPage);
