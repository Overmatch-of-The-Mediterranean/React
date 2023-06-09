import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            titles:['流行','新款','精选'],
            titleIndex:0
        }
    }

    changeText(index){
        this.setState({
            titleIndex:index
        })
    }

  render() {
    const { titles,titleIndex } = this.state

    return (
      <div>
        <TabControl titles={titles} tabClick={(index)=>this.changeText(index)}/>
        <div>{titles[titleIndex]}</div>
      </div>
    )
  }
}

export default App