import React from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Products extends React.Component {

	render() {
		const data = [
			{
				id: 1,
				item: 'Anti-Depressant',
				duplicate: 'Insulin',
				cost: '$20.00',
				tax: '$2.60',
				total: '$22.60'
			},
			{
				id: 2,
				item: 'Insulin',
				duplicate: 'Insulin',
				cost: '$15.00',
				tax: '$1.60',
				total: '$16.60'
			}
		];


		return (
			<div>
				<h2> Products</h2>	
				<BootstrapTable data={data} striped>
					<TableHeaderColumn dataField='id' isKey={true}></TableHeaderColumn>
					<TableHeaderColumn dataField='item'>Item/Details</TableHeaderColumn>
					<TableHeaderColumn dataField='duplicate'>Duplicate</TableHeaderColumn>
					<TableHeaderColumn dataField='cost'>Cost</TableHeaderColumn>
					<TableHeaderColumn dataField='tax'>Tax</TableHeaderColumn>
					<TableHeaderColumn dataField='total'>Total</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}