import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            username:'CoderWhy',
            password:''
        }
    }

    onSubmitClick(e) {
        e.preventDefault() // 阻止表单提交刷新的默认行为
        console.log('获取所有输入内容');
        console.log(this.state.username,this.state.password);
    }
    changeInput(e){
        const keyName = e.target.name
        this.setState({
            [keyName]:e.target.value
        })
    }

  render() {
    const {username,password} = this.state

    return (
      <div>
        <form onSubmit={e=>this.onSubmitClick(e)}>
            <label htmlFor="username">
                <input 
                    type="text" 
                    value={username}
                    name="username"
                    onChange={(e)=>this.changeInput(e)}/>
            </label>
            <label htmlFor="password">
                <input 
                    type="current-password" 
                    value={password}
                    name="password"
                    onChange={(e)=>this.changeInput(e)}/>
            </label>
            <button type="submit">注册</button>
        </form>
      </div>
    )
  }
}

export default App