import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {

    constructor(){
        super()
        this.state = {
            isLogin: true
        }
    }

    changeClick(){
        this.setState({isLogin:!this.state.isLogin})
    }

  render() {
    const {isLogin} = this.state

    return (
      <div>
        <SwitchTransition mode="out-in">
            <CSSTransition 
            // 内容切换的时候，key也切换，告知要执行不同的动画
                key={isLogin ? 'exit':'login'}
                in={isLogin} 
                classNames="login" 
                timeout={2000} 
                unmountOnExit={true}
                >
                <button onClick={()=>this.changeClick()}>{isLogin ? '退出':'登录'}</button>
            </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App