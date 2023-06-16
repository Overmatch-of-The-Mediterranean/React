import React, { memo, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
    const [showNames,setShowNames] = useState(namesArray)
    // 返回值表示过渡任务的等待状态，返回一个启动该过渡任务的函数
    // useTransition让react知道那些任务的更新优先级降低
    const [pending,startTransition] = useTransition()

    function changeValue (e){
        startTransition(()=>{
            const value = e.target.value
            const filterShowNames = namesArray.filter(item=>item.includes(value))
            setShowNames(filterShowNames)
        })
    }
  return (
    <div>
        <input type="text" onInput={changeValue} />
        {pending && <h2>loading......</h2>}
        <ul>
            {
                showNames.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
})

export default App