import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {

    constructor(){
        super()
        this.state = {
            message:'Hello World',
            counter:0
        }
    }

    changeText(){
        // 在react18之前，setTimeout，promise的回调，原生Dom事件中的setState都是同步操作
        // 在react18之前，setState都是异步操作
    //    setTimeout(()=>{
    //     this.setState({message:'Hello React'})
    //     console.log('in',this.state.message);
    //    },0)
       


        // react18之后将setState异步执行变为同步
        flushSync(()=>{
            // 里面还是异步操作，会进行合并，但25~30整个是同步的
            this.setState({message:'Hello Reactflush'})
            console.log('in',this.state.message);
        })
        console.log('out',this.state.message);
     
    }
    changeCount(){}

  render() {
    const {message,counter} = this.state

    return (
      <div>
        <div>{message}</div>
        <button onClick={()=>this.changeText()}>改变文本</button>
        <div>{counter}</div>
        <button onClick={()=>this.changeCount()}>+1</button>
      </div>
    )
  }
}

export default App