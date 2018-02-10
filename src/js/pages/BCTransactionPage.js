import React, { Component } from 'react';

import BCTransactionIntro from '../components/BCTransactions/BCTransactionIntro';
import BCTransactions from '../components/BCTransactions/BCTransactions';

class BCTransactionPage extends Component {
	render() {
		return (
			<div className="container">
				<BCTransactionIntro />
				<BCTransactions />
			</div>
		);
	}
}

export { BCTransactionPage };
