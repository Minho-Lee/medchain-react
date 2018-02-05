import React from 'react';

import BCTransactionIntro from '../components/BCTransactions/BCTransactionIntro';
import BCTransactions from '../components/BCTransactions/BCTransactions';

export default class BCTransactionPage extends React.Component {
	render() {
		return (
			<div className="container">
				<BCTransactionIntro />
				<BCTransactions />
			</div>
		);
	}
}