import React, { PureComponent } from 'react'

export class App extends PureComponent {
    
    constructor(){
        super()
        this.state = {
            counter: 100
        }
    }

    changeCounter(){
        this.setState({counter:this.state.counter + 1})
    }

  render() {
    const {counter} = this.state

    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <button onClick={()=>this.changeCounter()}>+1</button>
      </div>

    )
  }
}

export default App