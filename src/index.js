import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./layout/Main/Main";
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render
(<Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root"));
