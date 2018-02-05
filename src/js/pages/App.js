import React from 'react';
import '../../scss/App.css';

import MedCustomNavbar from '../components/MedCustomNavbar';
import HomePage from './Homepage';


class App extends React.Component {
  render() {   
    return (
      <div className="App">
        <header>
          <MedCustomNavbar />
        </header>

        <HomePage />

        <footer>
          Made By Min hoe ;) and Tryhard Bish
        </footer>
      </div>
    );
  }
}

export default App;
