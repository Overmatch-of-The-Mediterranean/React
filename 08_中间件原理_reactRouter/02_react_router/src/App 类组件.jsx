import React, { PureComponent } from 'react'
import { Routes,Route,Navigate,Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import NotFound from './pages/NotFound'
import Category from './pages/Category'
import Order from './pages/Order'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
            Header
            <div>
                <Link to="/home">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/login">登录</Link>
                <button>分类</button>
                <span>订单</span>
            </div>
            <hr />
        </div>
        <div className="content">
            <Routes>
                <Route path='/' element={<Navigate to="/home"/>}></Route>
                <Route path='/home' element={<Home/>}>
                    <Route path='/home' element={<Navigate to="/home/recommend"/>}></Route>
                    <Route path="/home/recommend" element={<HomeRecommend/>}></Route>
                    <Route path="/home/ranking" element={<HomeRanking/>}></Route>
                    <Route path='/home/category' element={<Category/>}></Route>
                    <Route path='/home/order' element={<Order/>}></Route>
                </Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
        <div className="footer">
            <hr />
            Footer
        </div>
      </div>
    )
  }
}

export default App