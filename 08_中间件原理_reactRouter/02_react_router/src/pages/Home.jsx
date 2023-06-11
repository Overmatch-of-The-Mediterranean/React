import React, { PureComponent } from 'react'
import { Outlet,Link } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div>
            <Link to="/home/recommend">推荐</Link>
            <Link to="/home/ranking">排行</Link>
        </div>

        <Outlet/>
      </div>
    )
  }
}

export default Home