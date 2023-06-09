import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context';

export class HomeInfo extends Component {
   
  render() {
    console.log(this.context);

    return (
        <div>
            <div>HomeInfoTheme- {this.context.color} </div>
            {/* 一个组件使用多个context时，可以用consumer */}
            <UserContext.Consumer>
                    {
                        value =>{
                            return<h2>HomeInfoTheme- {value.name}</h2>
                        }
                    }
            </UserContext.Consumer>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo