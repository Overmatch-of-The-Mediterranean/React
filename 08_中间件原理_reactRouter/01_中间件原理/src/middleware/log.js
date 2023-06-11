function log(store){
    const next = store.dispatch
    function logAndDispatch(action){
        console.log('当前派发的action',action);
        next(action)
        console.log('派发后的数据',store.getState());
    }

    store.dispatch = logAndDispatch
}

export default log