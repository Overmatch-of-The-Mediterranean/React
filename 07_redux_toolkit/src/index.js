import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { StoreContext } from "./hoc/StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </Provider>
)