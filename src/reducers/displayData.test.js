import reducer from './displayData';

describe('REDUCER', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({"formula": "", "isEquality": false, "value": 0})
     })

    it('should handle "ADD_VALUE" action', () => {
     expect(reducer({value:'1', formula:'1+1', isEquality:false}, { type: 'ADD_VALUE', value: '2' })).
       toEqual({ value:'12', formula:'1+12', isEquality:false })
    })

    it('should handle "DO_EQUALITY" action', () => {       
      expect(reducer({ value:'2', formula:'1+2*2-4/2', isEquality:false }, {type: "DO_EQUALITY"}))
        .toEqual({ value:3, formula:'1+2*2-4/2=3', isEquality:true })
    })
 })