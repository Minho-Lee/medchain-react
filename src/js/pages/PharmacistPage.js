import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import * as actions from '../actions';

import PharmacyHeading from '../components/PharmacistPageComponents/PharmacyHeading';
import CompanyDetails from '../components/PharmacistPageComponents/CompanyDetails';
import CustomerDetails from '../components/PharmacistPageComponents/CustomerDetails';
import Products from '../components/PharmacistPageComponents/Products';
import Comments from '../components/PharmacistPageComponents/Comments';
import Payment from '../components/PharmacistPageComponents/Payment';

class PharmacistPage extends Component {
	componentWillMount = () => {
		// This sends in a request to fetch all data and set it to this.props through reducer prior to rendering
		this.props.GetActivePatientData();
	}

	render() {
		const { name, age, address, phone, email, occupation, medPrescribed, recentActivities } = this.props;

		return(
			<div className='container-fluid invoice'>
				<PharmacyHeading />
				<div className='invoice-body'>
					<div className='row'>
						<div className='col-xs-5 col-sm-5'>
							<CompanyDetails />
						</div>
						<div className='col-xs-7 col-sm-7'>
							<CustomerDetails name={name} age={age} address={address}
								phone={phone} email={email} />
							</div>
						</div>
					<Products /><br/>
				</div>
				<div className='invoice-footer'>
					<Comments /><br/>
					<Payment /><br/>
				</div>
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
