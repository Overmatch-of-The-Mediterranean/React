import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            isLogin:false
        }
    }

    login(){
        localStorage.setItem('token','CoderWhy')
        // this.setState({isLogin:true})

        // 强制更新方式.不推荐使用
        this.forceUpdate()
    }

  render() {
    // const {isLogin} = this.state
    return (
      <div>
        App
        <Cart/>
        <button onClick={()=>this.login()}>登录</button>
      </div>
    )
  }
}

export default App