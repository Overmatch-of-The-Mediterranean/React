import React, { memo, useId, useState } from 'react'

const App = memo(() => {
    const [count,setCount] = useState(0)
    const id = useId()
    console.log(id);
  return (
    <div>
        <h2>counter:{count}</h2>
        <button onClick={()=>setCount(count + 1)}>+1</button>
        <label htmlFor={id}>
        姓名:<input type="text" id={id} />
        </label>
    </div>
  )
})

export default App