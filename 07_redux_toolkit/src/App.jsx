import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import { connect } from 'react-redux'
import About from './pages/About'

export class App extends PureComponent {
  render() {
    const {counter} = this.props

    return (
      <div>
        App counter: {counter}
        <div className="pages">
            <Home/>
            <Profile/>
            <About/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    counter:state.counter.counter
})

export default connect(mapStateToProps)(App) 
