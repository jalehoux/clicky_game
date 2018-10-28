import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Friendcard from './components/Friendcard';
import data from "./data.json";

class App extends Component {
  state = {
    data,
    currentScore: 0,
    bestScore: 0
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Header
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <div className="container">
          <div className="row">
            {this.state.data.map(point => (
              <Friendcard
                id={point.id}
                key={point.id}
                image={point.image}
                name={point.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
