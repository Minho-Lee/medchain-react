import React from 'react';

const PatientMetaData = ({address, phone, email}) => {
	return(
		<div className="container">
			<div>
				<i className="fa fa-home fa-3x" />
				<h3>{address}</h3>
			</div>
			<div>
				<i className="fa fa-phone fa-3x" />
				<h3>{phone}</h3>
			</div>
			<div>
				<i className="fa fa-envelope fa-3x" />
				<h3>{email}</h3>
			</div>
		</div>
	);
}

export default PatientMetaData;