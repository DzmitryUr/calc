import * as actions from './index'

describe('ACTIONS', () => {
   it('should create ADD_VALUE action with correct value', () => {
      const expectedAction = {
              type: 'ADD_VALUE',
              value: 10
            }
     expect(actions.addValue(10)).toEqual(expectedAction)
  })

  it('should create CHANGE_FORMULA action with correct value', () => {
    const expectedAction = {
            type: 'CHANGE_FORMULA',
            value: '+'
          }
    expect(actions.changeFormula('+')).toEqual(expectedAction)
  })
})