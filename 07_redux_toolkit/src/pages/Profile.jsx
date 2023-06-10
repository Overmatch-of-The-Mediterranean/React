import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/modules/counter'
import { fetchHomeMultidataAction } from '../store/modules/home'

export class Profile extends PureComponent {


    componentDidMount(){
        this.props.fetchHomeMultidata()
    }

    subNumberClick(num){
        this.props.subNumber(num)
    }


  render() {
    const {counter} = this.props

    return (
      <div>
        Profile Counter: {counter}
        <div>
            <button onClick={()=>this.subNumberClick(5)}>-5</button>
            <button onClick={()=>this.subNumberClick(8)}>-8</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    counter:state.counter.counter
})

const mapDispatchToProps = (dispatch)=>({
    subNumber(num){
        dispatch(subNumber(num))
    },
    fetchHomeMultidata(){
        dispatch(fetchHomeMultidataAction())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile) 