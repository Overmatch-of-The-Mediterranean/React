import React, { PureComponent } from 'react'
import store from '../store'
import { subNumberAction } from '../store/actionCreators'

export class Profile extends PureComponent {
    constructor(){
        super()
        this.state = {
            counter:store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState()
            this.setState({counter:state.counter})
        })
    }

    sunNumber(num){
        store.dispatch(subNumberAction(num))
    }

  render() {
    const {counter} = this.state

    return (
      <div className='profile'>
        Profile Counter {counter}
        <div>
            <button onClick={()=>this.sunNumber(1)}>-1</button>
            <button onClick={()=>this.sunNumber(5)}>-5</button>
            <button onClick={()=>this.sunNumber(10)}>-10</button>
        </div>
      </div>
    )
  }
}

export default Profile