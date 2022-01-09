import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
  }

  checkAnswer = (boolean, total, proposedAnswer) => {
  	this.setState( currentState => ({
      numQuestions: currentState.numQuestions + 1,
      numCorrect: (total === proposedAnswer && boolean) || (total !== proposedAnswer && !boolean) ? currentState.numCorrect + 1 : currentState.numCorrect,
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100), 
      value3: Math.floor(Math.random() * 100) 
    }))
  }
  
  render() {
    const total = this.state.value1 + this.state.value2 + this.state.value3
    const proposedAnswer = total + Math.floor(Math.random() * 3) 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={()=> {this.checkAnswer(true, total, proposedAnswer)} }>
            True
          </button>
          <button onClick={()=> {this.checkAnswer(false, total, proposedAnswer)} }>
            False
          </button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
