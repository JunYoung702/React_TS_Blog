import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import styled from "styled-components";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import Topmenu from "./component/Topmenu";
import "./App.css";

// vscode.typescript-language-features

class App extends React.Component {
    render() {
        return (
            <div className="page-layout">
                <Sidebar />
                <div className="main-layout" id="main-layout">
                    <Topmenu />
                    <Home />
                </div>
            </div>
        );
    }
}

export default App;
