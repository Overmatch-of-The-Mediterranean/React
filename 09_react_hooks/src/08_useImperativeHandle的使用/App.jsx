import React, { memo, useRef,forwardRef, useImperativeHandle } from 'react'

const HelloWorld = memo(forwardRef((props,ref)=>{
    const inputRef = useRef()
    // 当父组件操纵子组件的元素时，可使用useImperativeHandle来对父组件操作子组件元素的权限做管理
    useImperativeHandle(ref,()=>{
        return {
            focus(){
                console.log('聚焦');
                inputRef.current.focus()
            },
            setValue(value){
                inputRef.current.value = value
            }
        }
    })
    return <input ref={inputRef} type='text'></input>
}))

const App = memo(() => {
    const inputRef = useRef()

    const handleDom = ()=>{
        inputRef.current.setValue('哈哈哈')
        inputRef.current.focus()
    }
  return (
    <div>
        <h2>哈哈哈</h2>
        <HelloWorld ref={inputRef}/>
        <button onClick={()=>handleDom()}>点我获取Dom</button>
        
    </div>
  )
})

export default App