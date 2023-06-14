import React, { memo } from 'react'
import { useUserToken } from './hooks'


const Home = memo(()=>{
    const [user,token] = useUserToken()
    return <h2>Home:{user.name}-{user.age}-{token}</h2>
})

const About = memo(()=>{
    const [user,token] = useUserToken()
    return <h2>About:{user.name}-{user.age}-{token}</h2>
})

const App = memo(() => {
    const [user,token] = useUserToken()

  return (
    <div>
        <h2>App:{user.name}-{user.age}-{token}</h2>
        <Home/>
        <About/>
    </div>
  )
})

export default App