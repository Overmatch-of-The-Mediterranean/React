import React, { memo } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const Home = memo(()=>{
    const [scrollX,scrollY] = useScrollPosition()
    return <h2>Home:{scrollX}-{scrollY}</h2>
})

const About = memo(()=>{
    const [scrollX,scrollY] = useScrollPosition()
    return <h2>About:{scrollX}-{scrollY}</h2>
})

const App = memo(() => {
    const [scrollX,scrollY] = useScrollPosition()

  return (
    <div className='app'>
        <h2>App:{scrollX}-{scrollY}</h2>
        <Home/>
        <About/>
    </div>
  )
})

export default App