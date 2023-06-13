import React, { memo, useContext } from 'react'
import { UserContext,ThemeContext } from './context'

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
        <div>App {user.name}-{user.age}</div>
        <h2 style={{color:theme.color,fontSize:theme.size}}>{user.name}-{user.age}</h2>
    </div>
  )
})

export default App