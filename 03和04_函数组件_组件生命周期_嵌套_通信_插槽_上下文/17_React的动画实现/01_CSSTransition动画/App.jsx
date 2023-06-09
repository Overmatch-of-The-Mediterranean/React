import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {

    constructor(){
        super()
        this.state = {
            isShow: true
        }
    }

    changeClick(){
        this.setState({isShow:!this.state.isShow})
    }

  render() {
    const {isShow} = this.state

    return (
      <div>
        <button onClick={()=>this.changeClick()}>改变</button>
        <CSSTransition 
            in={isShow} 
            classNames="why" 
            timeout={2000} 
            unmountOnExit={true} appear
            onEnter={e=>{console.log('开始进入');}}
            onEntering={e=>{console.log('进入ing');}}
            onEntered={e=>{console.log('进入完毕');}}
            onExit={e=>{console.log('开始退出');}}
            onExiting={e=>{console.log('退出ing');}}
            onExited={e=>{console.log('退出完毕');}}
            >
            <h2>哈哈哈</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App