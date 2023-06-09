import React, { Component } from 'react'
import axios from 'axios'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            banner:[],
            productList:[]
        }
    }

  render() {
    const {banner,productList} = this.state

    return (
      <div>
        <h2>Main</h2>
        <MainBanner banner={banner}/>
        <MainProductList productList={productList}/>
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
        console.log(res);
        this.setState({
            banner:res.data.data.banner.list,
            productList:res.data.data.recommend.list
        })
    })
  }
}

export default Main