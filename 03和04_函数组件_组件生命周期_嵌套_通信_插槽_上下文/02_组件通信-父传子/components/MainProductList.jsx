import React, { Component } from 'react'

class MainProductList extends Component {
  render() {
    const {productList} = this.props

    return (
      <div className='mainProductList'>
        <h3>mainProductList</h3>
        <ul>
            {
                productList.map(item=>{
                    return <li key={item.acm}>{item.title}</li>
                })
            }
        </ul>
      </div>
    )
  }
}

export default MainProductList