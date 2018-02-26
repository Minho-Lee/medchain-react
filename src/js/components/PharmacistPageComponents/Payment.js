import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Digital } from 'react-activity';

const Payment = ({loading}) => {
	if (!loading) {
		return <Digital size={30} />;
	}
	return(
		<Card>
			<CardTitle className='mb-0'>Payment</CardTitle>
			<CardBody>
				<p>For your convenience, you may deposit the final amount at one of our banks</p>
				<ul className='list-unstyled'>
					<li>TD - <span className='mono'>1027 1839722</span></li>
					<li>Tangerine - <span className='mono'>0923 1908723</span></li>
					<li>RBC - <span className='mono'>2098 7621089</span></li>
				</ul>
			</CardBody>
		</Card>
	);
}

export default Payment;