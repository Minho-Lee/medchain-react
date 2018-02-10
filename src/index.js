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
import App from './App';

render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
