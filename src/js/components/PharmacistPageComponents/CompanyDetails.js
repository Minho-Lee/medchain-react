import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const CompanyDetails = () => {
	return (
		<Card>
			<CardTitle>
				Company Details
			</CardTitle>
			<CardBody>
				<dl className='dl-horizantal'>
					<dt>Name</dt>
					<dd>Acruz</dd>
					<dt>Address</dt>
					<dd>300 Front St. West, Toronto</dd>
					<dt>Phone</dt>
					<dd>(647) 142-9811</dd>
					<dt>Email</dt>
					<dd>contact@acruz.com</dd>
				</dl>
			</CardBody>
		</Card>
	);
}

export default CompanyDetails;