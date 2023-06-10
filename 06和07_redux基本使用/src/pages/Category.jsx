import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMutidataAction } from '../store/modules/home/actionCreators'

export class Category extends PureComponent {

    componentDidMount(){
        this.props.fetctHomeMutidataAction()
    }

  render() {
    return (
      <div>Category</div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
    fetctHomeMutidataAction(){
        dispatch(fetchHomeMutidataAction())
    }
})

export default connect(null,mapDispatchToProps)(Category)