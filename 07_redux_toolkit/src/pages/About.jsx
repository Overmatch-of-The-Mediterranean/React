import React, { PureComponent } from 'react'
import { connect } from '../hoc/connect'

export class About extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>About Counter: {counter}</div>
    )
  }
}

const mapStateToProps = (state)=>({
    counter:state.counter.counter
})

const mapDispatchToProps = (dispatch)=>({

})

export default  connect(mapStateToProps,mapDispatchToProps)(About)