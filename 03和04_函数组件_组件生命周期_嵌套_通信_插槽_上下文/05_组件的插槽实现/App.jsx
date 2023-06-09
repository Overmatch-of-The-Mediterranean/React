import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 使用props中的children实现插槽 */}
        <NavBar>
            <button>按钮1</button>
            <h2>嘿嘿嘿</h2>
            <i>斜体1</i>
        </NavBar>

        {/* 使用props实现插槽 */}
        <NavBar2 
            leftSlot={<button>按钮2</button>}
            centerSlot={<h2>哈哈哈</h2>}
            rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App