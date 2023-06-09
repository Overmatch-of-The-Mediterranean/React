import React, { Component } from 'react'
import ThemeContext from './context/theme-context'

export class Profile extends Component {
  render() {
    return (
      <div>
        Profile-{this.context.color}
      </div>
    )
  }
}

Profile.contextType = ThemeContext

export default Profile