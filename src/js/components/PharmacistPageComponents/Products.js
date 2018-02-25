import React from 'react';
import { Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Digital } from 'react-activity';

export default class Products extends React.Component {
	generatePrice() {
		let productCost = Math.floor(Math.random() * 20) + 10
		let tax = +((productCost * 0.13).toFixed(2));
		let total = (productCost + tax).toFixed(2);
		return [productCost , tax, total];
	}

	render() {
		const { items } = this.props;
		let counter = 0;

		const drugs = items.map((drug) => {
			const price = this.generatePrice();
			if (counter < 4) {	
				return (
					<tr key={drug.id}>
						<td>{drug.medPrescribed}</td>
						<td>TBD</td>
						<td>${price[0]}</td>
						<td>${price[1]}</td>
						<td>${price[2]}</td>
					</tr>
				);
				counter++;
			}
		})

		console.log(items);
		if (items.length === 0) {
			return <Digital size={30} />;
		} 

		return (
			<Card>
				<CardTitle className='mb-0'>Products</CardTitle>
				<CardBody>
					<Table striped bordered className='mb-0'>
						<thead>
							<tr>
								<th>Items / Details</th>
								<th className='colfix'>Duplicate</th>
								<th className='colfix'>Cost</th>
								<th className='colfix'>Tax</th>
								<th className='colfix'>Total</th>
							</tr>
						</thead>
						<tbody>
							{drugs}
						</tbody>
					</Table>
				</CardBody>
				{/*<BootstrapTable data={data} striped>
					<TableHeaderColumn dataField='id' isKey={true}></TableHeaderColumn>
					<TableHeaderColumn dataField='item'>Item/Details</TableHeaderColumn>
					<TableHeaderColumn dataField='duplicate'>Duplicate</TableHeaderColumn>
					<TableHeaderColumn dataField='cost'>Cost</TableHeaderColumn>
					<TableHeaderColumn dataField='tax'>Tax</TableHeaderColumn>
					<TableHeaderColumn dataField='total'>Total</TableHeaderColumn>
				</BootstrapTable>*/}
			</Card>
		);
	}
}