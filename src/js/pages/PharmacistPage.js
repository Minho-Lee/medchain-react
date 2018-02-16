import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import PharmacyHeading from '../components/PharmacistPageComponents/PharmacyHeading';
import Details from '../components/PharmacistPageComponents/Details';
import Products from '../components/PharmacistPageComponents/Products';
import Comments from '../components/PharmacistPageComponents/Comments';
import Payment from '../components/PharmacistPageComponents/Payment';

class PharmacistPage extends Component {
	componentWillMount = () => {
		// This sends in a request to fetch all data and set it to this.props through reducer prior to rendering
		this.props.GetActivePatientData(1);
	}

	render() {
		const { id, name, age, occupation, address, phone, email,
						medPrescribed, recentActivities, payload } = this.props;

		return(
			<div className='container'>
				<PharmacyHeading />
				<Details name={name} age={age}/><br/>
				<Products /><br/>
				<Comments /><br/>
				<Payment /><br/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		id: state.activePat.id,
		name: state.activePat.name,
		age: state.activePat.age,
		occupation: state.activePat.occupation,
		address: state.activePat.address,
		phone: state.activePat.phone,
		email: state.activePat.email,
		medPrescribed: state.activePat.medPrescribed,
		recentActivities: state.activePat.recentActivities,
	}
}

export default connect(mapStateToProps, actions)(PharmacistPage);
