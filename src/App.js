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
    bestScore: 0,
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleCorrect()
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleWrong();
    }
  };

  handleCorrect = () => {
    this.setState(prevState => {
      return {currentScore: prevState.currentScore + 1}
   });
   this.handleRandom();
  }

  handleWrong = () => {
    this.setState({
      currentScore: 0,
      clicked: []
    });
  }

  handleRandom = () => {
    const newArray = arr => arr.sort(() => Math.random() - 0.5);
    this.setState({ friends: newArray(data) });
  }

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
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
