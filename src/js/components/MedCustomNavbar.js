import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink } from 'reactstrap'; 

import '../../scss/Navbar.css'; 

export default class MedCustomNavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.getActiveState = this.getActiveState.bind(this);
		
		this.state = {
			isOpen: false
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	getActiveState() {
		return this.props.location.pathname;
	}

	render() {
		return (
			<Navbar className="navbar-body" fixed="top" dark expand="md"> 
				<NavbarBrand href="home"> 
						<span className="color-one">med</span> 
					<span className="color-two">chain</span> 
				</NavbarBrand> 
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className={(this.getActiveState() === '/patient') ? "active" : "disabled" }>Patient</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={(this.getActiveState() === '/doctor') ? "active" : "disabled" }>Doctor</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={(this.getActiveState() === '/pharmacist') ? "active" : "disabled" }>Pharmacist</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}