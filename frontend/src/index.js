import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
// import Firstpage from "./components/Firstpage"

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,document.querySelector("#root"));