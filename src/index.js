import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import store from './js/stores/store';

import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './js/App';
import HomePage from './js/pages/HomePage';

import registerServiceWorker from './js/serviceworkers/registerServiceWorker';

render(
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */ }
		<ConnectedRouter>
			<div>
				<Route exact path='/' component={App}/>
				<Route path='/home' component={HomePage} />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
