import React from 'react';
import Dropdown from 'react-dropdown';

export default class DiseaseDropdown extends React.Component {

	constructor() {
		super();

		//dummy data
		this.state = {
			diseaseOptions: [ 
				{
					type: 'TypeA', name: 'Type A Medical Conditions', items: [
						{
							id: 1,
							disease: "Hepatitis"
						},
						{
							id: 2,
							disease: "Hypothyroidism"
						}
					]
				},
				{
					type: 'TypeB', name: "Type B Medical Conditions", items: [
							{
								id: 3,
								disease: "Diabetes"
							}
					]
				}

			],
			selectedDisease: null
		}
	}

	onDiseaseSelection(val) {
		console.log(val);
	}


	render() {
		return(
			<Dropdown options={this.state.diseaseOptions}
				defaultValue={this.state.selectedDisease}
				menuClassName="dropdown-input"
				onSelect={this.onDiseaseSelection.bind(this)}
				placeholder="Please Choose" />
		);
	}


}