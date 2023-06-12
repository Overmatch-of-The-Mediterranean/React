import React, { PureComponent } from 'react'
import { Outlet,Link } from 'react-router-dom'
import withRouter from '../hoc/with_router'

export class Home extends PureComponent {

    navigateTo(path){
        const { router } = this.props
        const { navigate } = router
        navigate(path)
    }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div>
            <Link to="/home/recommend">推荐</Link>
            <Link to="/home/ranking">排行</Link>
            <button onClick={()=>this.navigateTo('/home/songMenu')}>歌曲菜单</button>
        </div>

        <Outlet/>
      </div>
    )
  }
}

export default withRouter(Home)