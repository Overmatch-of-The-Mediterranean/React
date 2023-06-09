import * as actionType from './constants'
import axios from 'axios'

const addNumberAction = (num)=> ({
    type: actionType.ADD_NUMBER,
    counter: num
})

const subNumberAction = (num)=> ({
    type: actionType.SUB_NUMBER,
    counter: num
})

const bannersAction = (banners)=>({
    type:actionType.BANNRES_ACTION,
    banners
})

const recommendsAction = (recommends)=>({
    type:actionType.RECOMMENDS_ACTION,
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
    addNumberAction,
    subNumberAction,
    bannersAction,
    recommendsAction,
    fetchHomeMutidataAction
}