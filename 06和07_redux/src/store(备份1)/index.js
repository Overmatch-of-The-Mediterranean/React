import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

// 开启redux-devtool，默认生产环境不开启，可以做一个判断是在开发环境还是生产环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store