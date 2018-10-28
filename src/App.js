import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
