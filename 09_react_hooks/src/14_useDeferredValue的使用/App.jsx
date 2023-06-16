import React, { memo, useDeferredValue, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
    const [showNames,setShowNames] = useState(namesArray)
    // 将任务的更新时间延后，和useTransition的作用相同，只不过其是返回一个延迟副本，然后再使用这个延迟副本
    const deferredShowNames = useDeferredValue(showNames)

    function changeValue (e){
            const value = e.target.value
            const filterShowNames = namesArray.filter(item=>item.includes(value))
            setShowNames(filterShowNames)
    }
  return (
    <div>
        <input type="text" onInput={changeValue} />
        <ul>
            {
                deferredShowNames.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
})

export default App