import ThemeContext from "../context/theme_context"

const withTheme = function(OriginComponent) {
    return ()=>{
        return (
            <ThemeContext.Consumer>
                {
                    value=>{
                        return <OriginComponent {...value}></OriginComponent>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default withTheme