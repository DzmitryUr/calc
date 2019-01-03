import Char from '../components/Char';
import { addValue } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    value: state.display.value
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    addValue: () => dispatch(addValue(ownProps.num))
})
  
const AddChar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Char)

export default AddChar;