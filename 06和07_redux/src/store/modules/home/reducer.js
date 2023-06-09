import * as actionTypes from './constants'

const initialState = {
    banners:[],
    recommends:[]
}

function reducer (state = initialState, action){
    switch (action.type){
        case actionTypes.BANNRES_ACTION:
            return { ...state,banners:action.banners }
        case actionTypes.RECOMMENDS_ACTION:
            return { ...state,recommends:action.recommends }
        default:
            return state
    }
}

export default reducer