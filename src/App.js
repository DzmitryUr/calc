import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Digit num="0" id="zero"/>
        <Digit num="1" id="one"/>
        <Digit num="2" id="two"/>
        <Digit num="3" id="three"/>
        <Digit num="4" id="four"/>
        <Digit num="5" id="five"/>
        <Digit num="6" id="six"/>
        <Digit num="7" id="seven"/>
        <Digit num="8" id="eight"/>
        <Digit num="9" id="nine"/>
        <MathOperator num="+" id="add"/>
        <MathOperator num="-" id="subtract"/>
        <MathOperator num="*" id="multiply"/>
        <MathOperator num="/" id="divide"/>
        <button id="equals">=</button>        
      </div>
    );
  }
}

class Digit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button id={this.props.id}>{this.props.num}</button>
    )
  }
}

class MathOperator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button id={this.props.id}>{this.props.num}</button>
    )
  }
}

export default App;
