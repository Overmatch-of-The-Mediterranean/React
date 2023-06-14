import { useEffect, useState } from "react";

function useLocalStorage(key){

    // const [data,setData] = useState(localStorage.getItem(key) || '')

    // 通过key从 LocalStorage中获得一个值
    const [data,setData] = useState(()=>{
        const item = localStorage.getItem(key)
        if(!item) return ''
        return JSON.parse(item)
    })
    
    // 监听data的改变，一旦改变就存储data的最新值
    useEffect(()=>{
        // 存入一个对象需要用JSON.stringify对其进行序列化
        localStorage.setItem(key,JSON.stringify(data))
    },[data])

    // 返回给组件，让组件可以使用和修改值
    return [data,setData]
}

export default useLocalStorage