import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {

    clickPrev() {
        eventBus.emit('bannerPrev','why',18,1.88)
    }
    clickNext() {
        eventBus.emit('bannerNext',{name:'Tom',age:20,height:1.77})
    }

  render() {
    return (
      <div>
        <div>HomeBanner</div>
        <button onClick={()=>this.clickPrev()}>上一个</button>
        <button onClick={()=>this.clickNext()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner