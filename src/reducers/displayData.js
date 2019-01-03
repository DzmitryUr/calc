export default (state = {value:0, formula:''}, action) => {
    console.log('reducer state=', state);
    switch (action.type) {
     case 'ADD_VALUE':        
        return {...state, value: getStateValue(state.value, action.value)};
    
    case 'CHANGE_FORMULA':
        return {...state, value: action.value, formula: getFormulaValue(state.value, state.formula, action.value)};        
     default:
      return state
    }
}

function getStateValue(state, value) {
    if (value === 'C') {
        return 0
    } else if (value === '.') {
        if (state.indexOf('.') > -1) {
            return state;
        }
    } else {
        if (state == '0') {
            state = '';
        }        
    }
    return state+value;
}

function getFormulaValue(value, formula, char) {
    return formula+value;
}