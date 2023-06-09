import React from 'react'
import ThemeContext from './context/theme-context'

function HomeBanner() {
  return (
    <div>
        <ThemeContext.Consumer>
            {
                value=>{
                    return <h1>HomeBanner: {value.color}</h1>
                }
            }
        </ThemeContext.Consumer>
    </div>
  )
}

export default HomeBanner