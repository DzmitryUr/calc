import React, { Component } from 'react';
import './App.scss';
import Display from './compenents/display'
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <Display />
          <MathOperator num="C" id="clear"/>
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
          <button id="equals">=</button>               
        </div>
        <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
<button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

class Digit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    //this.props.simpleAction();
  }
  
  render() {
    return (
      <button id={this.props.id} onClick={this.handleClick}>{this.props.num}</button>
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

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
