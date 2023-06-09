import React, { PureComponent,createRef } from 'react'

export class App extends PureComponent {

    constructor(){
        super()
        // 对应第二种
        this.titleRef = createRef()
        // 对应第三种
        this.titleEl = null
    }

    getNativeDom(){
        // 第一种方式：通过写一个ref属性,已废弃
        console.log('第一种方式',this.refs.h2dom);

        // 第二种方式：通过createRef创建出来一个ref对象，然后绑定到元素上
        console.log('第二种方式',this.titleRef.current);

        // 第三种方式：在ref中传入一个回调函数
        console.log('第三种方式',this.titleEl);
    }

  render() {
    return (
      <div>
        <h2 ref="h2dom">React1</h2>
        <h2 ref={this.titleRef}>React2</h2>
        <h2 ref={el=>this.titleEl = el}>React3</h2>
        <button onClick={()=>this.getNativeDom()}>点击获取Dom元素</button>
      </div>
    )
  }
}

export default App