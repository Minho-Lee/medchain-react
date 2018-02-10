import React from 'react';
import { render } from 'react-dom';

import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-activity/dist/react-activity.css';

import registerServiceWorker from './js/serviceworkers/registerServiceWorker';
import App from './App';

render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
