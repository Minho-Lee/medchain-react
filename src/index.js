import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import { store, history } from './js/stores/store';

import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { PharmacistPage, HomePage } from './js/pages';

import PatientPage from './js/pages/PatientPage';
import DoctorPage from './js/pages/DoctorPage';

import MedCustomNavbar from './js/components/MedCustomNavbar';

import registerServiceWorker from './js/serviceworkers/registerServiceWorker';

render(
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
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
