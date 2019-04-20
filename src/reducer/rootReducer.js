const initState = {
  sampleData: ['foo', 'bar']
};

const rootReducer = (state = initState, action) =>{
  switch(action.type){
    case 'DO_NOTHING':
      alert('hi')
      return state
    default:
      return state
  }
}
export default rootReducer