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

    sidebarToggle = () =>
        this.setState({ isSidebarOn: !this.state.isSidebarOn });

    render() {
        if (this.state.isSidebarOn) {
            return (
                <div className="page-layout">
                    <div className="mainpage">
                        <Home />
                    </div>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="topmenu">
                        <Topmenu handleClick={this.sidebarToggle} />
                    </div>
                </div>
            );
        } else
            return (
                <div className="page-layout">
                    <div className="mainpage">
                        <Home />
                    </div>
                    <div className="topmenu">
                        <Topmenu handleClick={this.sidebarToggle} />
                    </div>
                </div>
            );
    }
}

export default App;
