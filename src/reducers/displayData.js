export default (state = {value:0, formula:'', isEquality:false}, action) => {
    console.log('reducer state=', state);
    switch (action.type) {
     case 'ADD_VALUE':       
        let newValue = getStateValue(state.value, action.value);
        return {...state, value: newValue, formula: state.formula+action.value};
    
    case 'CHANGE_FORMULA':
        let value = action.value==='C'? 0 : action.value;
        let formula = getFormula(state.value, state.formula, action.value);
        if (formula && formula.includes('=')) {
            formula = state.value+value;
        }
        return {...state, value: value, formula: formula};   
    
    case 'DO_EQUALITY':
        let equality = 0;
        if (!state.formula.includes('=')) {
          equality = getEquality(state.formula);
        }
        return {...state, value: equality, formula: getEqualityFormula(state.formula, equality), isEquality: true}
        
     default:
      return state
    }
}

function getStateValue(state, value) {
    if (value === '.') {
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

function getFormula(value, formula, char) {
    console.log('getFormula=',value, formula, char)
    console.log('formula=',typeof formula);
    if (!formula) {
        return '';
    }    
    let lastChar = formula.slice(-1);
    if (char === 'C') {
        return '';
    } else if (lastChar==='+' || lastChar==='-' || lastChar==='*' || lastChar==='/') {
        return formula.slice(0,-1)+char;
    }
    return formula+char;
}

function getEquality(formula) {
    if (!formula) {
        return '';
    }
    let lastChar = formula.slice(-1);
    if (lastChar==='+' || lastChar==='-' || lastChar==='*' || lastChar==='/') {
        formula = formula.slice(0,-1);
    }
    return eval(formula);
}

function getEqualityFormula(formula, equality) {
    return formula+'='+equality;
}