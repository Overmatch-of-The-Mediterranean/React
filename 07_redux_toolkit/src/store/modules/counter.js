import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        counter:666
    },
    reducers:{
        addNumber(state,{payload}){
            state.counter += payload
        },
        subNumber(state,{payload}){
            state.counter -= payload
        }
    }
})

export default counterSlice.reducer
export const { addNumber,subNumber } = counterSlice.actions