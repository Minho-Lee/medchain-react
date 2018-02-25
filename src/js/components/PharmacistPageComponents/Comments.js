import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import { Digital } from 'react-activity';

const Comments = ({items}) => {
	// console.log(items);
	// if 'items' have not been received yet, lastItem will be undefined which will cause the app to crash.
	// if not loaded yet, render loading bar.
	if (items.length === 0) {
		return <Digital size={20} />;
	}
	// console.log(items);
	const lastItem = items[items.length-1];
	const { medPrescribed, doctorComments } = lastItem;
	return(
		<Card>
			<CardTitle className='mb-0'>Comments</CardTitle>
			<CardBody>
				<CardText>Prescription added: {medPrescribed}</CardText>
				<CardText>Doctor Comments: {doctorComments}</CardText>
			</CardBody>
		</Card>
	);
}

export default Comments;