import React, { memo } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { addNumberAction,subNumberAction,changeMessageAction } from './store/modules/counter'

const Home = memo((props)=>{
    console.log('Home');
    const { obj } = useSelector((state)=>({
        obj:state.counter.obj
    }),shallowEqual)

    const dispatch = useDispatch()

    function changeMessage (msg){
        dispatch(changeMessageAction(msg))
    }

    return (
        <div>
            <h2>Home:{obj.message}</h2>
            <button onClick={()=>changeMessage('React')}>改变</button>
        </div>
    )
})


const App = memo(() => {
    console.log('App');
    const {counte} = useSelector((state)=>({
        counte: state.counter.counte
    }),shallowEqual)

    const dispatch = useDispatch()

    function changeNumber (num, isAdd=true) {
        if(isAdd) {
            dispatch(addNumberAction(num))
        }else {
            dispatch(subNumberAction(num))
        }
    }

  return (
    <div>
        <h2>counter:{counte}</h2>
        <button onClick={()=>changeNumber(5)}>+5</button>
        <button onClick={()=>changeNumber(5,false)}>-5</button>

        <Home/>
    </div>
  )
})

export default App