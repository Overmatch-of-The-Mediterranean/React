import * as actionTypes from './constants'


const initialState = {
    counter:100,
    banners:[],
    recommends:[]
}

function reducer (state = initialState,action){
    switch(action.type){
        case actionTypes.ADD_NUMBER:
            return { ...state,counter: state.counter + action.counter }
        case actionTypes.SUB_NUMBER:
            return { ...state,counter: state.counter - action.counter }
        case actionTypes.BANNRES_ACTION:
            return { ...state, banners: action.banners }
        case actionTypes.RECOMMENDS_ACTION:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}

export default  reducer

