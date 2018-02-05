import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../scss/App.css';
import MedCustomNavbar from './components/MedCustomNavbar';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import PharmacistPage from './pages/PharmacistPage';
import DoctorPage from './pages/DoctorPage';

class App extends Component {
	render() {   
		return (
			<Switch>
				<div className="App">
					<header>
						<MedCustomNavbar />
					</header>

					<Route exact path='/' component={HomePage} />
					<Route exact path='/patient' component={PatientPage} />
					{/*<Route path='/pharmacist' component={PharmacistPage} />*/}
					{/*<Route path='/doctor' component={DoctorPage} />*/}

					<footer>
						Made By Min hoe ;) and Tryhard Bish
					</footer>
				</div>
			</Switch>
		);
	}
}

export default App;
