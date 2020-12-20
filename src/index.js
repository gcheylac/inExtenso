import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import "./index.css";
import inExtensoTheme from "./js/inExtensoTheme.js";

const theme = createMuiTheme(inExtensoTheme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
);
