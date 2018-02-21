import React from 'react';

const CustomerDetails = ({name, age, address, phone, email}) => {
	return (
		<div>
			<h4>Customer Details</h4>
			<div>
				<span><b>Name</b></span>
				<span> {name} </span>
			</div>
			<div>
				<span><b>Age</b></span>
				<span> {age} </span>
			</div>
			<div>
				<span><b>Address</b></span>
				<span> {address} </span>
			</div>
			<div>
				<span><b>Phone</b></span>
				<span> {phone} </span>
			</div>
			<div>
				<span><b>Email</b></span>
				<span> {email} </span>
			</div>
		</div>
	);
}

export default CustomerDetails;