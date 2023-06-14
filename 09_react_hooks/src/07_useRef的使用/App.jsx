import React, { memo, useCallback, useRef, useState } from 'react'

const App = memo(() => {
    const [counter,setCounter] = useState(0)
    const titleRef = useRef()
    titleRef.current = counter
    const increment = useCallback(()=>{
        setCounter(titleRef.current + 1)
        // setCounter(counter + 1)
    },[])

  return (
    <div>
        <h2>当前计数：{counter}</h2>
        <button onClick={increment}>+1</button>
    </div>
  )
})

export default App