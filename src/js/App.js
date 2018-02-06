import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../scss/App.css';
import MedCustomNavbar from './components/MedCustomNavbar';

class App extends Component {
	render() {   
		return (
				<div className="App">
					<header>
						<MedCustomNavbar />
					</header>

					<footer>
						Made By Min hoe ;) and Tryhard Bish
					</footer>
				</div>
			
		);
	}
}

export default App;
