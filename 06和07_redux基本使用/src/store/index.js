import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import counterReducer from './modules/counter'
import homeReducer from './modules/home'
import thunk from 'redux-thunk';

// 开启redux-devtool，默认生产环境不开启，可以做一个判断是在开发环境还是生产环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;


const reducer = combineReducers({
    counter:counterReducer,
    home:homeReducer
})

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store