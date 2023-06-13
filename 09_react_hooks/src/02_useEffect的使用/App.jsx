import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
    const [counter,setCounter] = useState(100)

    // 1.第一个参数传入的回调函数，做一些副作用，如事件监听/DOM操作/网络请求等，在Dom渲染完成之后执行
    // 2.返回的回调函数，消除副作用，如解绑事件监听/取消订阅等。在每次重新渲染和卸载组件时执行
    // 3.useEffect可以多个一起使用，执行顺序按照定义顺序来，可以将不同的副作用代码拆分出来更好维护和复用
    // 4.第二个参数，传入一个数组，数组中存放决定useEffect执行的状态，若为空，则该useEffect不受任何影响只执行一次，相当于class中的componentDidMount和componentDidUpdate
    useEffect(()=>{
        document.title = counter
    })

    useEffect(()=>{
        console.log('监听redux中的数据变化');

        return ()=>{
            console.log('取消监听redux中的数据变化');
        }
    },[counter])

    useEffect(()=>{
        console.log('EventBus绑定事件');

        return ()=>{
            console.log('解绑EventBus事件');
        }
    },[])

  return (
    <div>
        <h2>App Counter:{counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
    </div>
  )
})

export default App