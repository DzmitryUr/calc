export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
}

export const addValue = (value) => ({    
        type: 'ADD_VALUE',
        value: value    
})