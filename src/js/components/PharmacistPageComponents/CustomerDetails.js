import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const CustomerDetails = ({name, age, address, phone, email}) => {
	return (
		<Card>
			<CardTitle>Customer Details</CardTitle>
			<dl className='dl-horizantal'>
				<dt>Name</dt>
				<dd>{name}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
				<dt>Address</dt>
				<dd>{address}</dd>
				<dt>Phone</dt>
				<dd>{phone}</dd>
				<dt>Email</dt>
				<dd>{email}</dd>
			</dl>
		</Card>
	);
}

export default CustomerDetails;