import React, { Component } from 'react';
import './App.scss';
import Display from './components/Display'
import Formula from './components/Formula'
import AddChar from './containers/AddChar'
import ChangeFormula from './containers/ChangeFormula'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <Formula />
          <Display />
          <div>
            <AddChar num="C" id="clear" className="double-width background-yellow"/>
            <ChangeFormula num="/" id="divide"/>
            <ChangeFormula num="*" id="multiply"/>
            <AddChar num="7" id="seven"/>
            <AddChar num="8" id="eight"/>
            <AddChar num="9" id="nine"/>
            <ChangeFormula num="-" id="subtract"/>
            <AddChar num="4" id="four"/>
            <AddChar num="5" id="five"/>
            <AddChar num="6" id="six"/>          
            <ChangeFormula num="+" id="add"/>
            <AddChar num="1" id="one"/>
            <AddChar num="2" id="two"/>
            <AddChar num="3" id="three"/>
            <AddChar num="0" id="zero" className="double-width"/>
            <AddChar num="." id="decimal"/>
            <button id="equals" className="button-equals background-yellow">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
