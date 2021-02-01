import React from "react";
import "./SidebarButton.css";

function sidebarOpen() {
    const sb = document.getElementById("Sidebar");
    //const t = document.getElementById("Topmenu")!;
    const m = document.getElementById("main-layout");

    sb.style.width = "300px";
    m.style.marginLeft = "300px";
}

function SidebarOpen() {
    return (
        <div className="SidebarOpen" onClick={sidebarOpen}>
            &#9776;
        </div>
    );
}

export default SidebarOpen;
