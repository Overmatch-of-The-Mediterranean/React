import * as actionTypes from './constants'


const addNumberAction = (num)=> ({
    type: actionTypes.ADD_NUMBER,
    counter: num
})

const subNumberAction = (num)=> ({
    type: actionTypes.SUB_NUMBER,
    counter: num
})

export {
    addNumberAction,
    subNumberAction
}