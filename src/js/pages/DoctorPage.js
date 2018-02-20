import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { Button, 
		 Form, 
		 FormGroup, 
		 Label, 
		 Input
 } from 'reactstrap';

import { store } from '../stores/store';
import * as actions from '../actions';

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
			renderTest: false,
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {
			selMed: this.state.selectedMedicine,
			docCom: this.state.doctorComment,
		};

		this.props.PostDoctorPrescription({...data});
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

	//testing out pulling information out from firebase db
	componentWillMount() {
		this.props.FetchPatientData('Sukhpal');
	}
	testingFirebase = () => {
		this.props.FetchPatientData('Sukhpal');
		this.setState({ renderTest : true });
		// console.log('re rendering! ' + this.state.renderTest);
	}

	renderTestFB = () => {
		if (this.state.renderTest) {
			console.log(this.props.patient);
			var copy = _.values(this.props.patient);
			// const patientInfo = copy.map((item, i) => 
			// 	<li key={i}>
			// 		{item}
			// 	</li>
			// );
			

			const patientInfo = Object.keys(this.props.patient).map((key) => {
				var item = this.props.patient[key];
				console.log(key);
				console.log(item);
				console.log(item.address);
				console.log(item.occupation);
				return (
					<li key={item.uid}>
						{item.age}<br/>
						{item.address}<br/>
						{item.occupation}<br/>
						{item.phone}<br/>
					</li>
				);
			});
			console.log(patientInfo);

			return (
				<div>
					<ul>{patientInfo}</ul>
				</div>
			);
			// return (
			// 	<p>{this.props.patient[0].address}</p>
			// );
		}
	}

	render() {
		console.log(this.props);
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
					<Button type='button' onClick={this.testingFirebase}>Test Firebase</Button>
				</Form>
				
				{this.renderTestFB()}
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

const mapStateToProps = ( state ) => {
	console.log(state.activePat);
	const patient = _.map(state.activePat, (val, uid) => {
		console.log(uid);
		console.log(val);
		return {...val, uid}
	})
	return {
		patient
		//name: state.activePat.name,
	}
}


// const bindActionsToDispath = (dispatch) => (
// 	{
// 		PostDoctorPrescription: (data) => dispatch(actions.PostDoctorPrescription(data))
// 	}
// );

export default connect(mapStateToProps, actions)(DoctorPage);
