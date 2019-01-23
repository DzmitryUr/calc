import Equality from '../components/Equality';
import { doEquality } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    value: state.display.value
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    doEquality: () => dispatch(doEquality(ownProps.num))
})
  
const ChangeFormula = connect(
    mapStateToProps,
    mapDispatchToProps
)(Equality)

export default ChangeFormula;