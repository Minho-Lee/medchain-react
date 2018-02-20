import React from 'react';
import RandomGuyImage from '../../../images/square-sample-face.jpg';

const PatientName = ({name, age, occupation}) => {
	return (
		<div className="row">
			<div className='col-md-6'>
				<img className='mr-3' src={RandomGuyImage} height={300} alt="" />
			</div>
			<div className='col-md-6'>
				<h2>{name}, {age}</h2>
				<h3>{occupation}</h3>
			</div>
		</div>
	);
}
	
export default PatientName;