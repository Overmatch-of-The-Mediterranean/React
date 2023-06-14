
import ReactDOM from 'react-dom/client'
// import { UserContext, ThemeContext } from './03_useContext/context'
import { TokenContext,UserContext } from './10_自定义Hooks/context'

// import App from './02_useEffect的使用/App'
// import App from './03_useContext/App'
// import App from './04_useReducer的使用(了解)/App'
// import App from './05_useCallback的使用/App'
// import App from './06_useMemo的使用/App'
// import App from './07_useRef的使用/App'
// import App from './08_useImperativeHandle的使用/App'
// import App from './09_useLayoutEffect的使用/App'
import App from './10_自定义Hooks/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <UserContext.Provider value={{name:'Tom',age:20}}>
    //     <ThemeContext.Provider value={{color:'red',size:'50px'}}>
    //         <App/>
    //     </ThemeContext.Provider>
    // </UserContext.Provider>
    <UserContext.Provider value={{name:'Tom',age:20}}>
        <TokenContext.Provider value={'coderwhy'}>
            <App/>
        </TokenContext.Provider>
    </UserContext.Provider>
)