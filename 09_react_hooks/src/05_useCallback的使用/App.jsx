import React, { memo, useState,useCallback, useRef } from 'react'

const HYhome = memo((props)=>{
    const {increment} = props
    console.log('HYhome被渲染');
    return <button onClick={increment}>HYhome +1</button>
})

const App = memo(() => {
    const [counter,setCounter] = useState(0)
    const [message,setMessage] = useState('Hello!')

    // useCallback返回一个函数的记忆值
    // 若依赖不变，函数定义多次，依然返回同一个值
    // 第二个参数是数组，定义受什么state影响时，重新赋值给increment一个新函数,若不传入，则每次组件渲染都会生成一个函数，和使用普通函数没差别

    // 普通函数
    // const increment = ()=>{
    //     setCounter(counter+1)
    // }

    // 对传入函数的子组件的渲染做优化
    // 情况一：非依赖数据变化，不引发子组件重新渲染
        // 只需在第二个参数中，填入依赖项

        // const increment = useCallback(()=>{
        //     console.log('App被渲染');
        //     setCounter(counter + 1)
        // },[counter])



    // 情况二：数据变化也不生成新函数重新赋值increment，也只使用同一个函数
        // 方式一：第二个参数为空[]，表示不受任何影响，只是用原来的记忆值，但会陷入闭包陷阱，使得功能不能正常执行

        // const increment = useCallback(()=>{
        //     setCounter(counter + 1)
        // },[])



        // 方式二：使用useRef(组件多次渲染，返回值不变)，其可以解决闭包陷阱
    const counterRef = useRef()
    counterRef.current = counter
    const increment = useCallback(()=>{
        setCounter(counterRef.current + 1)
    },[])


  return (
    <div>
        <h2>当前计数：{counter}</h2>
        <button onClick={increment}>+1</button>
        <HYhome increment={increment}/>

        <h2>message: {message}</h2>
        <button onClick={()=>setMessage(Math.random())}>改变</button>
    </div>
  )
})

export default App