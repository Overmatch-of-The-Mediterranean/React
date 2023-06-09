import React, { PureComponent } from 'react'
import { HomeWrapper,NewHyButton } from './style'

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2>商品列表</h2>
        <ul className='list'>
            <li className='item'>列表1</li>
            <li className='item'>列表2</li>
            <li className='item'>列表3</li>
        </ul>
        <NewHyButton>按钮</NewHyButton>
      </HomeWrapper>
    )
  }
}

export default Home