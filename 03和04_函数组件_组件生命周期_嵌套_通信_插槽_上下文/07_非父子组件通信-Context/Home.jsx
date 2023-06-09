import React, { Component } from 'react'
import HomeInfo from './HomeInfo'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  render() {
    const {name,age} = this.props

    return (
      <div>
        Home:{name + '-' + age}
        <HomeBanner/>
        <HomeInfo></HomeInfo>
      </div>
    )
  }
}

export default Home