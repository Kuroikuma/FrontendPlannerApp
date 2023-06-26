import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
// import { rootReducer } from "./reducers/rootReducers";
import { applyMiddleware, compose } from "redux";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <Provider store={store}>
        <BrowserRouter>
                <App  />
        </BrowserRouter>
    </Provider>
);