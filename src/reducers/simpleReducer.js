export default (state = 1, action) => {
    console.log('reducer state=', state);
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     case 'ADD_VALUE':
     console.log('ADD_VALUE');
     return action.value;
     
     default:
      return state
    }
}