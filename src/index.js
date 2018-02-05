import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './js/App';
import registerServiceWorker from './js/serviceworkers/registerServiceWorker';

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
