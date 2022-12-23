import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';
import Dash from './Dash';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header backColor="green" width="100%"></Header>
        <Header backColor="blue" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Seven></Seven>
        <Eight></Eight>
        <Nine></Nine>
        <Ten></Ten>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
