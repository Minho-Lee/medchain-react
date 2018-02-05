import React from 'react';
import { Navbar, Nav, NavItem, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MedCustomNavBar extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand">React-Bootstrap</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
					
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">
							Link
						</NavItem>
						<NavItem eventKey={2} href="#">
							Link
						</NavItem>
								
						<DropdownMenu eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<DropdownItem eventKey={3.1}>Action</DropdownItem>
							<DropdownItem eventKey={3.2}>Another action</DropdownItem>
							<DropdownItem eventKey={3.3}>Something else here</DropdownItem>
						<DropdownItem divider />
								
						<DropdownItem eventKey={3.3}>Separated link</DropdownItem>
						</DropdownMenu>
					</Nav>
						
					<Nav pullRight>
							<NavItem eventKey={1} href="#">
								Link Right
							</NavItem>
							<NavItem eventKey={2} href="#">
								Link Right
							</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}