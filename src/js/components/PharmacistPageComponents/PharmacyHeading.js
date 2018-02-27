import React, { Component } from 'react';

export default class PharmacyHeading extends Component {
	generateRandomNumber = () => {
		let num = Math.floor(Math.random() * 45678) + 20000; 
		let date = new Date().toDateString().slice(4);
		return <p>NO: {num}/R1 | Date: {date}</p>;
	}

	render() {
		return(
			<div className='row mt-5 pharmacist-heading'>
				<div className='col-xs-8 col-sm-8'>
					<h1> Invoice </h1>
					{this.generateRandomNumber()}
				</div>
				<div className='col-xs-4 col-sm-4'>
					<img src='https://dummyimage.com/70x70/000/fff&text=Acruz' alt='insert' />
				</div>
			</div>
		);
	}
}