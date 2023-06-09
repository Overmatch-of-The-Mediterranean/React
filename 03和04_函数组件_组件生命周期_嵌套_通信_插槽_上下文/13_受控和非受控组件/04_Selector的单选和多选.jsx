import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.state = {
            username:'CoderWhy',
            password:'',
            isAgree:false,
            hobbies:[
                {value:'sing',text:'唱',checked:false},
                {value:'dance',text:'跳',checked:false},
                {value:'rap',text:'rap',checked:false}
            ],
            fruits:[]
        }
    }

    onSubmitClick(e) {
        e.preventDefault() // 阻止表单提交刷新的默认行为
        console.log('获取所有输入内容');
        console.log(this.state.username,this.state.password);
        console.log('爱好',this.state.hobbies.filter(item=>item.checked).map(item=>item.value));
        console.log('fruits',this.state.fruits);
    }
    changeInput(e){
        const target = e.target
        const keyName = target.name
        console.log('keyName',keyName);
        let value
        if (target.type==='checkbox') {
            value = target.checked
        } else {
            value = target.value
        }
        console.log(value);
        this.setState({
            [keyName]:value
        })
    }

    changeCheckBox(e,index){
        const newHobbies = [...this.state.hobbies]
        newHobbies[index].checked = e.target.checked
        this.setState({hobbies:newHobbies})
    }

    changeSelector(e){
        const options = e.target.selectedOptions
        const values = Array.from(options,item=>item.value)

        this.setState({fruits:values})
    }

  render() {
    const {username,password,isAgree,hobbies,fruits} = this.state

    return (
      <div>
        <form onSubmit={e=>this.onSubmitClick(e)}>
            <div>
                <label htmlFor="username">
                    用户：
                    <input 
                        type="text" 
                        value={username}
                        name="username"
                        onChange={(e)=>this.changeInput(e)}/>
                </label>
                <label htmlFor="password">
                    密码：
                    <input 
                        type="current-password" 
                        value={password}
                        name="password"
                        onChange={(e)=>this.changeInput(e)}/>
                </label>
            </div>
            {/* 一个checkbox */}
            <div>
                <label htmlFor="isAgree">
                    <input 
                        id="isAgree"
                        type="checkbox" 
                        checked={isAgree} 
                        name="isAgree"
                        onChange={(e)=>this.changeInput(e)}/>
                        同意协议
                </label>
            </div>
            {/* 多个checkbox */}
            <div>
                
                    {
                        hobbies.map((item,index)=>{
                            return (
                                <label key={item.value} htmlFor={item.value}>
                                    <input 
                                        id={item.value}
                                        type="checkbox" 
                                        checked={item.checked}
                                        onChange={(e)=>this.changeCheckBox(e,index)}
                                        /> {item.text}
                                </label>
                                    
                            )
                        })
                    }
                    
            </div>

            {/* select多选 */}
            <div>
                <select value={fruits} onChange={(e)=>this.changeSelector(e)} multiple>
                    <option value="apple">苹果</option>
                    <option value="banana">香蕉</option>
                    <option value="watermelon">西瓜</option>
                </select>
            </div>
            <div>
                <button type="submit">注册</button>
            </div>
        </form>
      </div>
    )
  }
}

export default App