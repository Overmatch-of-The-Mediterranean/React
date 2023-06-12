import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router'

export class HomeSongMenu extends PureComponent {
    constructor(){
        super()
        this.state = {
            songs:[
                {id:111,title:'说了再见'},
                {id:112,title:'星辰不坠落'},
                {id:113,title:'blue'}
            ]
        }
    }

    navigateTo(id){
        const { router } = this.props
        const { navigate } = router
        navigate( '/detail/' + id)
    }
  render() {
    const {songs} = this.state

    return (
      <div>
        <h2>HomeSongMenu</h2>
        <ul>
            {
                songs.map(item=>{
                    return <li onClick={()=>this.navigateTo(item.id)} key={item.id}>{item.title}</li>
                })
            }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)