import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { store, history } from './js/stores/store';

import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './js/pages/HomePage';
import PatientPage from './js/pages/PatientPage';
import DoctorPage from './js/pages/DoctorPage';
import PharmacistPage from './js/pages/PharmacistPage';

import MedCustomNavbar from './js/components/MedCustomNavbar';

class App extends Component {

	componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyBUCOFyhr4HnDC96_G8bUaSpQQ-xCxpT7E",
			authDomain: "medchain-react.firebaseapp.com",
			databaseURL: "https://medchain-react.firebaseio.com",
			projectId: "medchain-react",
			storageBucket: "medchain-react.appspot.com",
			messagingSenderId: "1035022109801"
		};
		firebase.initializeApp(config);
		console.log('firebase initialized');
	}

	render() {
		return (
			<Provider store={store}>
			{ /* ConnectedRouter will use the store from Provider automatically */ }
				<ConnectedRouter history={history}>
					<div>
						<Route path='/' component={MedCustomNavbar} />
						{/*<Route exact path='/' component={App}/>*/}
						<Route path='/home' component={HomePage} />
						<Route exact path='/' component={HomePage} />
						<Route path='/patient' component={PatientPage} />
						<Route path='/doctor' component={DoctorPage} />
						<Route path='/pharmacist' component={PharmacistPage} />
					</div>
				</ConnectedRouter>
			</Provider>
			);
		}
	}

export default App;



