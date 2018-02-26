import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Digital } from 'react-activity';

import * as actions from '../actions';

import PharmacyHeading from '../components/PharmacistPageComponents/PharmacyHeading';
import CompanyDetails from '../components/PharmacistPageComponents/CompanyDetails';
import CustomerDetails from '../components/PharmacistPageComponents/CustomerDetails';
import Products from '../components/PharmacistPageComponents/Products';
import Comments from '../components/PharmacistPageComponents/Comments';
import Payment from '../components/PharmacistPageComponents/Payment';
import Footer from '../components/PharmacistPageComponents/Footer';

class PharmacistPage extends Component {
	componentWillMount = () => {
		// This sends in a request to fetch all data and set it to this.props through reducer prior to rendering
		this.props.GetActivePatientData();
	}

	render() {
		if (!this.props) {
			return (
				<Digital size={50} />
			);
		}
		const { name, age, address, phone, email, occupation, medPrescribed, recentActivities } = this.props;

		return(
			<div className='container-fluid invoice'>
				<PharmacyHeading />
				<div className='invoice-body'>
					<div className='row'>
						<div className='col-xs-5 col-sm-5'>
							{/* sending in a random variable to load everything at the same time */}
							<CompanyDetails loading={name}/>
						</div>
						<div className='col-xs-7 col-sm-7'>
							<CustomerDetails name={name} age={age} address={address}
								phone={phone} email={email} />
						</div>
					</div>
					<div id='products' className='mt-5'>
						<Products items={medPrescribed}/><br/>
					</div>
					<div className='row'>
						<div className='col-xs-7 col-sm-7' id='comments'>
							<Comments items={medPrescribed} />
						</div>
						<div className='col-xs-5 col-sm-5' id='payment'> 
							{/* sending in a random variable to load everything at the same time */}
							<Payment loading={name} />
						</div>
					</div>	
				</div>
				<div className='invoice-footer mt-5'>
					<Footer />
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
