import React, {useCallback} from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import {doNothing} from '../actions/postActions'

function SampleComponent(){
  const mapState = useCallback(state => state.sampleData, [])
  const sampleData = useMappedState(mapState)

  const dispatch = useDispatch();
  const sayHi = useCallback(() => dispatch(doNothing(),[]))
  return(
    <div>
      <div>Content for SampleRouter</div>
      <div>{sampleData}</div>
      <button onClick={sayHi}>hi</button>
    </div>
  )
}

export default SampleComponent