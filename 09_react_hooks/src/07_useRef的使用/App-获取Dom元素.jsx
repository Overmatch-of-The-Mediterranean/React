import React, { memo, useRef } from 'react'

const App = memo(() => {
    const titleRef = useRef()

  return (
    <div>
        <h2 ref={titleRef}>哈哈哈</h2>
        <button onClick={()=>console.log(titleRef.current)}>点我获取Dom</button>
    </div>
  )
})

export default App