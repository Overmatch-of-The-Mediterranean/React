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

    getItemType(item){
        if(item==='流行') {
            return <span>{item}</span>
        }else if(item==='新款') {
            return <button>{item}</button>
        }else {
            return <i>{item}</i>
        }
    }

  render() {
    const { titles,titleIndex } = this.state

    return (
      <div>
        <TabControl 
            titles={titles} 
            tabClick={(index)=>this.changeText(index)}
            // itemType={item=><button>{item}</button>}
            itemType={item=>this.getItemType(item)}
            />
        <div>{titles[titleIndex]}</div>
      </div>
    )
  }
}

export default App