import React, { Component } from 'react'

class MainBanner extends Component {
    constructor(props){
        super(props)
    }

  render() {
    const {banner} = this.props

    return (
      <div className='mainBanner'>
         <h3>mainBanner</h3>
        <ul>
            {
                banner.map(item=>{
                    return <li key={item.acm}>{item.title}</li>
                })
            }
        </ul>
      </div>
    )
  }
}

export default MainBanner