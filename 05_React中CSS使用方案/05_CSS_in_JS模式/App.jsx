import React, { PureComponent } from 'react'
import { AppWrapper,SectionWrapper } from './style'
import Home from './Home'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            color:'yellow',
            size:30
        }
    }

  render() {
    const {color,size} = this.state

    return (
      <AppWrapper>
            <SectionWrapper color={color} size={size}>
                <h2 className='title'>我是标题</h2>
                <p className='content'>我是内容：哈哈哈</p>
                <button onClick={()=>this.setState({color:'purple'})}>改变</button>
            </SectionWrapper>

            <Home/>

            <div className='footer'>
                <p>责任声明</p>
                <p>版权归属</p>
            </div>
      </AppWrapper>
    )
  }
}

export default App