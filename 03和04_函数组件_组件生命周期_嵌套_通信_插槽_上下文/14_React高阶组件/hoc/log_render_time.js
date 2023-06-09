import { PureComponent } from "react"

function logRenderTime (OriginComponent) {
    return class extends PureComponent {

        UNSAFE_componentWillMount(){
            this.startTime = new Date().getTime()
        }

        componentDidMount(){
            this.endTime = new Date().getTime()

            const interval = this.endTime - this.startTime
            console.log(`渲染${OriginComponent.name}页面花费了${interval}ms`);
        }

        render(){
            return <OriginComponent/>
        }
    }
}

export default logRenderTime