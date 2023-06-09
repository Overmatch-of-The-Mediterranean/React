import React, { Component } from 'react'

export class App extends Component {

    constructor(){
        super()
        this.state = {
            message:'Hello World',
            counter:0
        }
    }

    changeText(){
        // 1.setState的基本用法
        // this.setState = ({
        //     message:'React'
        // })

        // 2.setState的回调用法
        // 好处一：可以接收state和props
        // 好处二：可以编写一些对state的处理逻辑
        // this.setState((state,props)=>{
            // 获取之前的state和props的值
            // 编写一些对新的state处理逻辑
        //     console.log(state,props);
        //     return {
        //         message:'React'
        //     }
        // })

        // 3.setState在React的事件处理中是异步调用
        // 如果希望在数据更新之后(数据合并)，获取到对应的结果执行一些逻辑代码
        // 可以传入第二个参数 callback
        this.setState({message:'React3'},()=>{
            console.log('this.state.message in',this.state.message);
        })
        console.log('this.state.message out',this.state.message);
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