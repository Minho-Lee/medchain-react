import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './js/App';
import registerServiceWorker from './js/serviceworkers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
