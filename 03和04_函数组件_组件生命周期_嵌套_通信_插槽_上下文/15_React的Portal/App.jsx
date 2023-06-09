import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>我是h1</h1>
        {
            createPortal(<h2>我是h2</h2>,document.getElementById('why'))
        }
        <Modal>
            <h2>我是标题</h2>
            <p>我是内容：哈哈哈</p>
        </Modal>
      </div>
    )
  }
}

export default App