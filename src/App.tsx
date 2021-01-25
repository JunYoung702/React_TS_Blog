import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import Sidebar from "./component/Sidebar";
import Topmenu from "./component/Topmenu";
// vscode.typescript-language-features

interface AppState {
    isSidebarOn: boolean;
}

class App extends React.Component {
    state: AppState = {
        isSidebarOn: false,
    };

    sidebarToggle = () => {
        const sb = document.getElementById("sidebarLayout")!;
        const m = document.getElementById("mainpage")!;
        const t = document.getElementById("toppage")!;
        if (this.state.isSidebarOn) {
            sb.style.width = "0px";
            m.style.marginLeft = "0px";
            t.style.marginLeft = "0px";
        } else {
            sb.style.width = "250px";
            m.style.marginLeft = "250px";
            t.style.marginLeft = "250px";
        }

        this.setState({ isSidebarOn: !this.state.isSidebarOn });
    };

    render() {
        return (
            <div className="page-layout">
                <button className="SidebarButton" onClick={this.sidebarToggle}>
                    X
                </button>
                <div className="mainpage" id="mainpage">
                    <Home />
                </div>
                <div className="sidebar" id="sidebarLayout">
                    <Sidebar />
                </div>
                <div className="topmenu" id="toppage">
                    <Topmenu />
                </div>
            </div>
        );
    }
}

export default App;
