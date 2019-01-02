export default (state = 0, action) => {
    console.log('reducer state=', state);
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     case 'ADD_VALUE':
     console.log('ADD_VALUE');
     return getStateValue(state, action.value);
     
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