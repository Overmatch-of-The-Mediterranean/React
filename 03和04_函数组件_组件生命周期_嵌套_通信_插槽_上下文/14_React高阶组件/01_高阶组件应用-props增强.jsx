import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'

const Hello = enhancedUserInfo(function(props){
    return (
        <div>Hello-{props.name}-{props.age}-{props.banners}</div>
    )
})

const Home = enhancedUserInfo(function(props){
    return (
        <div>Home-{props.name}-{props.age}</div>
    )
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Hello banners={['轮播1','轮播2']}/>
        <Home/>
        <About/>
      </div>
    )
  }
}

export default App