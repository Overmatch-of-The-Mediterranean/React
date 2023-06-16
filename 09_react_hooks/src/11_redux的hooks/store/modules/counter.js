import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counte:100,
        obj:{
            message:'Hello World'
        }
    },
    reducers:{
        addNumberAction(state,{payload}){
            state.counte += payload
        },
        subNumberAction(state,{payload}){
            state.counte -= payload
        },
        changeMessageAction(state,{payload}) {
            state.obj.message = payload
        }
    }
})

export const {addNumberAction,subNumberAction,changeMessageAction } = counterSlice.actions
export default counterSlice.reducer