import React, { PureComponent,createRef,forwardRef } from 'react'


const HelloWorld = forwardRef(function (props,ref) {
    return (
        <div>
            <h2 ref={ref}>Hello World FUNC</h2>
        </div>
    )
})
 

export class App extends PureComponent {

    constructor(){
        super()

        this.hwRef = createRef()

    }

    getNativeDom(){
        console.log('this.hwRef.current',this.hwRef.current);
    }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef}/>
        <button onClick={()=>this.getNativeDom()}>点击获取Dom元素</button>
      </div>
    )
  }
}

export default App