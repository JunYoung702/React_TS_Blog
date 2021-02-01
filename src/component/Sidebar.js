import React from "react";
import "./Sidebar.css";
import SidebarClose from "./SidebarClose";

function Sidebar() {
    return (
        <div className="Sidebar" id="Sidebar">
            <SidebarClose />
            Sidebar
            <ol>
                <li>메뉴1</li>
                <li>메뉴2</li>
            </ol>
        </div>
    );
}

export default Sidebar;
