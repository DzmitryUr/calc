import Char from '../components/Char';
import { addValue } from '../actions/simpleAction.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    value: state.value
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    addValue: () => dispatch(addValue(ownProps.num))
})
  
const AddChar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Char)

export default AddChar;