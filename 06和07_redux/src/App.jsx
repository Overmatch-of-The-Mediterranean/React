import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import './style.css'
import store from './store'
import Category from './pages/Category'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            counter:store.getState().counter.counter
        }
    }

    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState().counter
            this.setState({counter:state.counter})
        })
    }

  render() {
    const {counter} = this.state

    return (
      <div>
        <div>App Counter: {counter}</div>
        <div className='pages'>
            <Home/>
            <Profile/>
            <About/>
            <Category/>
        </div>
      </div>
    )
  }
}

export default App