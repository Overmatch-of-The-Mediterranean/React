import * as actionTypes from './constants'
import axios from 'axios'



const bannersAction = (banners)=>({
    type:actionTypes.BANNRES_ACTION,
    banners
})

const recommendsAction = (recommends)=>({
    type:actionTypes.RECOMMENDS_ACTION,
    recommends
})

const fetchHomeMutidataAction = ()=>{
    return function(dispatch,getState){
        axios.get('http://123.207.32.32:8000/home/multidata').then(res =>{
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list
            console.log('getState',getState());
            dispatch(bannersAction(banners))
            dispatch(recommendsAction(recommends))
        })
    }
}

export {
    bannersAction,
    recommendsAction,
    fetchHomeMutidataAction
}