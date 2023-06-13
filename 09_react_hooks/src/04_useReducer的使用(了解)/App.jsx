import React, { memo, useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'add_number':
            return { ...state,counter:state.counter + action.num }
        case 'sub_number':
            return { ...state,counter:state.counter - action.num }
        default:
            return state
    }
}

const App = memo(() => {

    const [state,dispatch] = useReducer(reducer,{counter: 0})

  return (
    <div>
        <h2>当前计数：{state.counter}</h2>
        <button onClick={()=> dispatch({type: 'add_number',num:1})}>+1</button>
        <button onClick={()=> dispatch({type: 'sub_number',num:1})}>-1</button>
        <button onClick={()=> dispatch({type: 'add_number',num:5})}>+5</button>
        <button onClick={()=> dispatch({type: 'sub_number',num:5})}>-5</button>
    </div>
  )
})

export default App