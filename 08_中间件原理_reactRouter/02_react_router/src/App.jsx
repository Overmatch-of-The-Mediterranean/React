import React from 'react'
import { Routes,Route,Navigate,Link,useNavigate, useRoutes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import HomeRecommend from './pages/HomeRecommend'
// import HomeRanking from './pages/HomeRanking'
// import HomeSongMenu from './pages/HomeSongMenu'
// import NotFound from './pages/NotFound'
// import Category from './pages/Category'
// import Order from './pages/Order'
// import Detail from './pages/Detail'
// import User from './pages/User'
import routes from './router'

export function App(props) {
    const navigate = useNavigate()

    function navigateTo(path){
        navigate(path)
    }

    return (
      <div>
        <div className="header">
            Header
            <div>
                <Link to="/home">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/login">登录</Link>
                <button onClick={()=>navigateTo('/category')}>分类</button>
                <span onClick={()=>navigateTo('/order')}>订单</span>
                <Link to="/user?name=Tom&age=20">用户</Link>
            </div>
            <hr />
        </div>
        <div className="content">
            {/* <Routes>
                <Route path='/' element={<Navigate to="/home"/>}></Route>
                <Route path='/home' element={<Home/>}>
                    <Route path='/home' element={<Navigate to="/home/recommend"/>}></Route>
                    <Route path="/home/recommend" element={<HomeRecommend/>}></Route>
                    <Route path="/home/ranking" element={<HomeRanking/>}></Route>
                    <Route path='/home/songMenu' element={<HomeSongMenu/>}></Route>
                </Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/category' element={<Category/>}></Route>
                <Route path='/order' element={<Order/>}></Route>
                <Route path='/detail/:id' element={<Detail/>}></Route>
                <Route path='/user' element={<User/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes> */}
            {
                useRoutes(routes)
            }
        </div>
        <div className="footer">
            <hr />
            Footer
        </div>
      </div>
    )
}

export default App