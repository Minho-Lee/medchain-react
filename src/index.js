import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './js/pages/App';
import registerServiceWorker from './js/serviceworkers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
