import React, { Component } from 'react';
import './Assets/css/default.css';
import Header from './Components/headerComponents/header';
import Footer from './Components/footerComponents/footer';
import Homepage from './Components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <Homepage />

      <Footer />

      </div>
    );
  }
}

export default App;
