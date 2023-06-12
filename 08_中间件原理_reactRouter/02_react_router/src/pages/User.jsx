import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router'

export class User extends PureComponent {
  render() {
    const {router} = this.props
    const { query,location } = router
    console.log('location',location);
    console.log('query',query);

    return (
      <div>
        <h2>User</h2>
        <h1>{query.name}-{query.age} </h1>
      </div>
    )
  }
}

export default withRouter(User)