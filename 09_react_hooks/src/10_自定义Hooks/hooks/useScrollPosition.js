import { useEffect, useState } from "react";

function useScrollPosition(){
    const [scrollX,setScrollX] = useState(0)
    const [scrollY,setScrollY] = useState(0)

    useEffect(()=>{
        function handleListen(){
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll',handleListen)
        return ()=>{
            window.removeEventListener('scroll',handleListen)
        }
    },[])
    return [scrollX,scrollY]
}

export default useScrollPosition