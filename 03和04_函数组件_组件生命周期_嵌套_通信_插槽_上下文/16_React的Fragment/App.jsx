import React, { Fragment, PureComponent } from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            sections:[
                {title:'哈哈哈',text:'我是内容：哈哈哈'},
                {title:'嘿嘿嘿',text:'我是内容：嘿嘿嘿'}
            ]
        }
    }

  render() {
    const {sections} = this.state

    return (
      <div>
        <h2>我是App的标题</h2>
        <p>我是App的内容：yahu~</p>
        {
            sections.map(item=>{
                return(
                    <Fragment key={item.title}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </Fragment>
                )
            })
        }
      </div>
    )
  }
}

export default App