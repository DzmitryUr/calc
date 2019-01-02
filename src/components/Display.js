import React, { Component } from 'react';
import { connect } from 'react-redux'

class Display extends Component {
    constructor(props) {
      super(props);      
    }
    render() {
      console.log('props=',this.props);
      return (
        <div id="display" className="div-display">{this.props.value}</div>
      )
    }
  }

  const mapStateToProps = (state) => {console.log('display state=',state); return {    
    value: state.value
  }}

  Display = connect(
    mapStateToProps
  )(Display)
  
  export default Display