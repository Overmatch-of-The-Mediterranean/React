import React, { Component } from 'react'
import eventBus from './utils/event-bus'
import Home from './Home'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            age:0,
            height:0
        }
    }

    componentDidMount () {
        eventBus.on('bannerPrev',this.bannerPrevClick,this)
        eventBus.on('bannerNext',this.bannerNextClick,this)
    }

    componentWillUnmount(){
        eventBus.off('bannerPrev',this.bannerPrevClick)
        eventBus.off('bannerNext',this.bannerNextClick)
    }

    bannerPrevClick(name,age,height){
        this.setState({
            name,
            age,
            height
        })
    }

    bannerNextClick(obj){
        this.setState({
            name:obj.name,
            age:obj.age,
            height:obj.height
        })
    }

  render() {
    const {name,age,height} = this.state

    return (
      <div>
        App Component {name}-{age}-{height}
        <Home/>
      </div>
    )
  }
}

export default App