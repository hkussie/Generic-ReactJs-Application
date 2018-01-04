import React, { Component } from 'react';
import './Assets/css/default.css';
import Header from './Components/headerComponents/header';
import Footer from './Components/footerComponents/footer';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <Footer />

      </div>
    );
  }
}

export default App;
