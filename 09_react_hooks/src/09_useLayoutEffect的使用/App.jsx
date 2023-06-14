import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
    const [counter,setCounter] = useState(100)

    // 在真正更新到页面之前，检查数据是否有异常，若有异常，重新render，可用来解决闪频问题。
    useLayoutEffect(()=>{
        if(counter===0){
            setCounter(Math.random() + 99)
        }
    })


    // 会有闪频问题
    // useEffect(()=>{
    //     if(counter===0){
    //         setCounter(Math.random() + 99)
    //     }
    // })

  return (
    <div>
        <h2>App: {counter}</h2>
        <button onClick={()=>setCounter(0)}>变零</button>
    </div>
  )
})

export default App