import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export class Home extends PureComponent {
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

    addNumberChange(num){
        store.dispatch(addNumberAction(num))
    }

  render() {
    const {counter} = this.state
    return (
      <div className='home'>
        Home Counter {counter}
        <div>
            <button onClick={()=>this.addNumberChange(1)}>+1</button>
            <button onClick={()=>this.addNumberChange(5)}>+5</button>
            <button onClick={()=>this.addNumberChange(10)}>+10</button>
        </div>
    </div>
    )
  }
}

export default Home