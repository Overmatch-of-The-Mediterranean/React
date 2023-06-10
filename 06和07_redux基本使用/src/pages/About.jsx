import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/modules/counter/actionCreators';

export class About extends PureComponent {

    calcNumber(num,isAdd){
        if(isAdd){
            console.log('加');
            this.props.addNumber(num)
        } else {
            console.log('减');
            this.props.subNumber(num)
        }
    }

  render() {
    const {counter,banners,recommends} = this.props
    return (
      <div>
        About Counter {counter}
        <div>
            <button onClick={()=>this.calcNumber(6,true)}>+6</button>
            <button onClick={()=>this.calcNumber(88,true)}>+88</button>
            <button onClick={()=>this.calcNumber(6,false)}>-6</button>
            <button onClick={()=>this.calcNumber(88,false)}>-88</button>
        </div>
        <div className="banners">
            <h2>轮播图</h2>
            <ul>
                {
                    // [].map((item,index)=>{
                    //     return <li key={index}></li>
                    // })
                    banners.map((item,index)=>{
                        return <li key={index}>{item.title}</li>
                    })
                }
            </ul>
        </div>
        <div className="recommends">
            <h2>推荐</h2>
            <ul>
                {
                    recommends.map((item,index)=>{
                        return <li key={index}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        counter:state.counter.counter,
        banners:state.home.banners,
        recommends:state.home.recommends
    }
}

const mapDispatchToProps = (dispatch)=>({
    addNumber(num){
        dispatch(addNumberAction(num))
    },
    subNumber(num){
        dispatch(subNumberAction(num))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)