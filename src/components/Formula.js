import React, { Component } from 'react';
import { connect } from 'react-redux'

class Formula extends Component {
    constructor(props) {
      super(props);      
    }
    render() {
      console.log('props=',this.props);
      return (
        <div id="formula" className="formula-screen">{this.props.value}</div>
      )
    }
  }

  const mapStateToProps = (state) => ({    
    value: state.display.formula
  })

  Formula = connect(
    mapStateToProps
  )(Formula)
  
  export default Formula