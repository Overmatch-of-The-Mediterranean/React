import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/modules/counter'

export class Home extends PureComponent {


    addNumberClick(num){
        this.props.addNumber(num)
    }

  render() {
    const {counter, banners, recommends} = this.props

    return (
      <div>
        Home Counter: {counter}
        <div>
            <button onClick={()=>this.addNumberClick(5)}>+5</button>
            <button onClick={()=>this.addNumberClick(8)}>+8</button>
        </div>
        <div className="banners">
            <h2>轮播图</h2>
            <ul>
                {
                    banners.map((item,index)=>{
                        return <li key={index}>{item.title}</li>
                    })
                }
            </ul>
        </div>
        <div className="recommends">
            <h2>推荐</h2>
            {
                recommends.map((item,index)=>{
                    return <li key={index}>{item.title}</li>
                })
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    counter: state.counter.counter,
    banners: state.home.banners,
    recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch)=>({
    addNumber(num){
        dispatch(addNumber(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)