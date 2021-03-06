import React, { Component } from 'react';
import McLogo from '../../../images/mclight-logo.png';

export default class WeclomeSection extends Component {
	render() {
		return (
			<div id="section1">
				<header className="row">
					<img src={McLogo} alt="Smiley face" className='ml-3'/>
					<h2 className='ml-3'>med</h2>
					<h2 style={{color: '#F33259'}} >chain</h2>
				</header>

				<div className="section1-content mt-3">
					<h2>Data Privacy with scope using IBM Blockchain</h2>
					<p className='mt-3'> Data privacy is critical when it comes to sharing medical information publicly. 
							IBM Blockchain makes it possible to set up scopes that give different levels of access to 
							each of the participants on the network. For example, a doctor can see Medical Information 
							of only his patients and not all the patients that are registered on the network. The doctor
							 gets the READ access to the patient data only when the patient chooses to see the doctor.
							  The accesses are managed by the Blockchain network using smart contracts.
					</p>

					{/*<h4>
						View the realtime Blockchain Transactions
					</h4>*/}
				</div>
			</div>

		);
	}

}