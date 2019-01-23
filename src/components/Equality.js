import React, { Component } from 'react';

export default class Char extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <button id={this.props.id} onClick={this.props.doEquality} className={this.props.className}>{this.props.num}</button>
      )
    }
}