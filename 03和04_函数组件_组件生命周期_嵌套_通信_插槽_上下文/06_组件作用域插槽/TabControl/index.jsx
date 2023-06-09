import React, { Component } from 'react'
import './style.css'


export class TabControl extends Component {
    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }

    itemClick(index){
        this.setState({
            currentIndex:index
        })
        this.props.tabClick(index)
    }

  render() {
    const { titles,itemType } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tabControl'>
        {
            titles.map((item,index) => {
                return (
                    <div 
                        className={`item ${currentIndex === index ? 'active' : ''}`}
                        key={item}
                        onClick={()=>this.itemClick(index)}
                    >
                        {/* <span>{item}</span> */}
                        { itemType(item) }
                    </div>
                )
            })
        }
      </div>
    )
  }
}

export default TabControl