import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router';

export class Detail extends PureComponent {

  render() {
    const { router } = this.props
    const { params } = router
    // console.log('params',params);

    return (
      <div>
        <h2>Detail Page</h2>
        <h1>{params.id}</h1>
      </div>
    )
  }
}

export default withRouter(Detail)