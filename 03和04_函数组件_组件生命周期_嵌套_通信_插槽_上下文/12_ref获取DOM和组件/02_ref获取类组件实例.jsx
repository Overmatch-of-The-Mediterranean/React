import React, { PureComponent,createRef } from 'react'


class HelloWorld extends PureComponent {

    test(){
        console.log('-------test');
    }

    render(){
        return <h2>Hello World</h2>
    }
}

export class App extends PureComponent {

    constructor(){
        super()
        this.hwdComponent = createRef()

    }

    getComponent(){
        console.log('hwdComponent',this.hwdComponent.current);
        this.hwdComponent.current.test()
    }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwdComponent}/>
        <button onClick={()=>this.getComponent()}>点击获取类组件实例</button>
      </div>
    )
  }
}

export default App