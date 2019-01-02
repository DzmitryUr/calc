import React, { Component } from 'react';
import './App.scss';
import Display from './compenents/Display'
import { connect } from 'react-redux';
import { simpleAction, addValue } from './actions/simpleAction'

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
          <DigitCont num="1" id="one"/>
          <DigitCont num="2" id="two"/>
          <DigitCont num="3" id="three"/>
          <DigitCont num="4" id="four"/>
          <DigitCont num="5" id="five"/>
          <DigitCont num="6" id="six"/>
          <DigitCont num="7" id="seven"/>
          <DigitCont num="8" id="eight"/>
          <DigitCont num="9" id="nine"/>
          <MathOperator num="+" id="add"/>
          <MathOperator num="-" id="subtract"/>
          <MathOperator num="*" id="multiply"/>
          <MathOperator num="/" id="divide"/>
          <MathOperator num="." id="decimal"/>          
          <button id="equals">=</button>               
        </div>
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
      <button id={this.props.id} onClick={this.props.addValue}>{this.props.num}</button>
    )
  }
}

const mapStateToProps = (state) => ({    
  value: state.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addValue: () => dispatch(addValue(ownProps.num))
})

const DigitCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Digit)

class MathOperator extends Component {
  render() {
    return (
      <button id={this.props.id}>{this.props.num}</button>
    )
  }
}

export default App;
