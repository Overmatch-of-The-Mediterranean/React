import React, { memo, useEffect, useLayoutEffect } from 'react'

const App = memo(() => {

    useLayoutEffect(()=>{
        console.log('useLayoutEffect'); // 2
    })

    useEffect(()=>{
        console.log('useEffect'); //3
    })
    
    console.log('App'); // 执行顺序 1
  return (
    <div>App</div>
  )
})

export default App