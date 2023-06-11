import { createStore,compose,combineReducers } from "redux";
import counterReducer from './modules/counter'
import homeReducer from './modules/home'
// import thunk from 'redux-thunk';

import { log,thunk,applyMiddleware } from "../middleware";

// 开启redux-devtool，默认生产环境不开启，可以做一个判断是在开发环境还是生产环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;


const reducer = combineReducers({
    counter:counterReducer,
    home:homeReducer
})

// const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer)

applyMiddleware(store,log,thunk)

export default store