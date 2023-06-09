import  ReactDOM  from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";

// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/02_组件通信-父传子/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/03_组件通信-子传父/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/04_组件通信案例练习/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/05_组件的插槽实现/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/06_组件作用域插槽/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/07_非父子组件通信-Context/App";

// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/08_非父子组件通信-EventBus/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/09_setState详细使用/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/12_ref获取DOM和组件/App";

// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/13_受控和非受控组件/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/14_React高阶组件/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/15_React的Portal/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/16_React的Fragment/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/17_React的动画实现/01_CSSTransition动画/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/17_React的动画实现/02_SwitchTransition动画/App";
// import App from "./03_函数组件_组件生命周期_嵌套_通信_插槽_上下文/17_React的动画实现/03_TransitionGroup/App";

import App from "./05_React中CSS使用方案/05_CSS_in_JS模式/App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <ThemeProvider theme={{color:'yellow',size:100}}>
            <App/>
        </ThemeProvider>
    </StrictMode>
)
