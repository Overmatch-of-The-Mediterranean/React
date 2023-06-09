import React, { Component } from 'react'
import Home from './Home'
import Profile from './Profile';
import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';


export class App extends Component {
    constructor(){
        super()
        this.state = {
            info:{
                name:'Tom',
                age:20
            }
        }
    }

  render() {
    const {info} = this.state

    return (
      <div>
        App
        {/* 层层传递数据的方便形式（但还是不推荐） */}
        {/* <Home 
            {...info}
        /> */}

        {/* 使用Context直接将数据传给后代组件 */}
        {/* context可以嵌套使用 */}
        <UserContext.Provider value={{name:'Tom',age:20}}>
            <ThemeContext.Provider value={{color:'red',size:30}}>
                <Home></Home>
            </ThemeContext.Provider>
        </UserContext.Provider>

        {/* 使用默认的defaultValue */}
        <Profile/>
      </div>
    )
  }
}

export default App
