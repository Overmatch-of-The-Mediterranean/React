import React, { memo } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {

    const [token,setToken] = useLocalStorage('token')

    function setTokenHandle (){
        setToken('why')
    }

    const [avatorUrl,setAvatorUrl] = useLocalStorage('avatorUrl')

    function setAvatorUrlHandle (){
        setAvatorUrl('http:www.baidu.com')
    }



  return (
    <div>
        <h2>App</h2>
        <h2>token {token}</h2>
        <button onClick={setTokenHandle}>改变token</button>
        <h2>avatorUrl {avatorUrl}</h2>
        <button onClick={setAvatorUrlHandle}>改变avatorUrl</button>
    </div>
  )
})

export default App