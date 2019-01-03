import FormulaBt from '../components/FormulaBt';
import { changeFormula } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    value: state.display.value
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    addValue: () => dispatch(changeFormula(ownProps.num))
})
  
const ChangeFormula = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormulaBt)

export default ChangeFormula;