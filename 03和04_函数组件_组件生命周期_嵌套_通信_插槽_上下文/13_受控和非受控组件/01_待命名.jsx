import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            username:'CoderWhy'
        }
    }

    changeInput(e){
        console.log('e.target.value',e.target.value);

        this.setState({username:e.target.value},()=>{
            console.log('this.state.username',this.state.username);
        })
    }

  render() {
    const {username} = this.state

    return (
      <div>
        {/* 被react控制的，叫做可控组件 */}
        {/* 使用value，则必须要有onChange，否则input只能是可读 */}
        <input type="text" value={username} onChange={(e)=>this.changeInput(e)}/>
        <h2>{username}</h2>
      </div>
    )
  }
}

export default App