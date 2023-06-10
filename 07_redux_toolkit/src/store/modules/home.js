import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk('fetchHomeMultidata',async (extraInfo,{dispatch,getState})=>{
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    // 第三种写法
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list
    // dispatch(changeBanners(banners))
    // dispatch(changeRecommends(recommends))

    // 返回结果，action的状态会变为fulfilled状态
    return res.data
})


const homeSlice = createSlice({
    name:'home',
    initialState:{
        banners:[],
        recommends:[]
    },
    reducers:{
        changeBanners(state,{payload}){
            state.banners = payload
        },
        changeRecommends(state,{payload}){
            state.recommends = payload
        }
    },
    // 第一种写法（已被废弃，RTK2.0中会被移除）
    // extraReducers:{
    //     [fetchHomeMultidataAction.pending](state,{payload}){
    //         console.log('fetchHomeMultidata pending');
    //     },
    //     [fetchHomeMultidataAction.fulfilled](state,{payload}){
    //         console.log(payload);
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //     },
    //     [fetchHomeMultidataAction.rejected](state,{payload}){
    //         console.log('fetchHomeMultidata rejected');
    //     }
    // }

    // 第二种写法是官方推荐写法
    extraReducers:(builder)=>{
        builder
        .addCase(fetchHomeMultidataAction.pending,(state,{payload})=>{
            console.log('fetchHomeMultidata pending');
        })
        .addCase(fetchHomeMultidataAction.fulfilled,(state,{payload})=>{
            state.banners = payload.data.banner.list
            state.recommends = payload.data.recommend.list
        })
        .addCase(fetchHomeMultidataAction.rejected,(state,{payload})=>{
            console.log('fetchHomeMultidata rejected');
        })
    }
})


export default homeSlice.reducer

export const {changeBanners,changeRecommends} = homeSlice.actions