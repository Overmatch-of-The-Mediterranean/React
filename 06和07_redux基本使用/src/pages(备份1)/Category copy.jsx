import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bannersAction, recommendsAction } from '../store/actionCreators'
import store from '../store'

export class Category extends PureComponent {

    componentDidMount(){
        axios.get('http://123.207.32.32:8000/home/multidata').then(res =>{
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list
            // console.log('category',this.props);
            this.props.bannersDispatch(banners)
            this.props.recommendsDispatch(recommends)
            console.log('store',store.getState().banners);
        })
    }

  render() {
    return (
      <div>Category</div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
    bannersDispatch(banners){
        dispatch(bannersAction(banners))
    },
    recommendsDispatch(recommends){
        dispatch(recommendsAction(recommends))
    }
})

export default connect(null,mapDispatchToProps)(Category)