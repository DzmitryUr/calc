import React, { Component } from 'react';
import './App.scss';
import Display from './compenents/display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-container">
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
          <MathOperator num="." id="decimal"/>
          <MathOperator num="AC" id="clear"/>
          <button id="equals">=</button>     
          <Display />   
        </div>
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
  render() {
    return (
      <button id={this.props.id}>{this.props.num}</button>
    )
  }
}

export default App;
