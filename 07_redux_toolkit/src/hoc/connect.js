import { PureComponent } from "react";
// import store from "../store";
import { StoreContext } from "./StoreContext";

export function connect(mapStateToProps,mapDispatchToProps){
    return function(WrapperComponent){
        class NewComponent extends PureComponent{


            constructor(props,context){
                super()
                this.state = mapStateToProps(context.getState())
            }

            componentDidMount(){
                this.unSubscribe = this.context.subscribe(()=>{
                    this.setState(mapStateToProps(this.context.getState()))
                })
            }

            componentWillUnmount(){
                this.unSubscribe()
            }

            render(){
                const stateObj = mapStateToProps(this.context.getState())
                const dispatchObj = mapDispatchToProps(this.context.dispatch)

                return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj}/>
            }
        }
        
        // 使用Context做store的解耦操作，不必在connect中自己引入，通过别的地方间接来获得
        NewComponent.contextType = StoreContext

        return NewComponent
    }
}