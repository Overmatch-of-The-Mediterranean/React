import React, { memo, useMemo, useState } from 'react'


const HelloWorld = memo((props)=>{
    // 若传递给子组件的是值类型，则传递的值改变也不会触发子组件的重新渲染
    // 若传递给子组件的是引用类型，则传递的值改变会触发子组件的重新渲染
    const {total,user} = props
    console.log('HelloWorld被重新渲染了~');
    return <h2>HelloWorld:{total}-{user.name}-{user.age}</h2>
})

function addNumTotal (num){
    console.log('我被重新计算了~');
    let total = 0
    for(let i = 1;i<=num;i++){
        total += i
    }
    return total
}


const App = memo(() => {
    const [counter,setCounter] = useState(0)
    // let total = addNumTotal(50)


    //useMemo优化
    // 第一个参数回调函数，返回一个有记忆的值
    // 第二个参数，设置影响useMemo返回新值的状态,就算没有也必须设置为空[]
    // 第一种情况：涉及大量计算，重新渲染时是否有必要重新计算
    let total = useMemo(()=>{
        return addNumTotal(50)
    },[])

    // 第二种情况，涉及向组件传递引用类型值，使用useMemo对子组件的渲染进行优化
    let user = useMemo(()=>({
        name:'Tom',
        age:20
    }),[])

  return (
    <div>
        <h2>计算总数:{total}</h2>
        <h2>App: {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
        <HelloWorld total={total} user={user}/>
    </div>
  )
})

export default App