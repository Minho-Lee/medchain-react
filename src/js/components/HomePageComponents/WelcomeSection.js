import React, { Component } from 'react';
import McLogo from '../../../images/mclight-logo.png';

export default class WeclomeSection extends Component {
	render() {
		return (
			<div className="container">
				<header className="row">
					<img  src={McLogo} alt="Smiley face" />
					<h1>med</h1>
					<h1 class="logo-color-change">chain</h1>
				</header>

				<div className="section1-content">
					<h2>Data Privacy with scope using IBM Blockchain</h2>
					<h4> Data privacy is critical when it comes to sharing medical information publicly. IBM Blockchain makes it possible to set up scopes that give different levels of access to each of the participants on the network. For example, a doctor can see Medical Information of only his patients and not all the patients that are registered on the network. The doctor gets the READ access to the patient data only when the patient chooses to see the doctor. The accesses are managed by the Blockchain network using smart contracts.
					</h4>

					<h4>
						View the realtime Blockchain Transactions
					</h4>
				</div>
			</div>

		);
	}

}