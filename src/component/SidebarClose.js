import React from "react";
import "./SidebarButton.css";

function sidebarClose() {
    const sb = document.getElementById("Sidebar");
    //const t = document.getElementById("Topmenu")!;
    const m = document.getElementById("main-layout");

    sb.style.width = "0px";
    m.style.marginLeft = "0px";
}

function SidebarClose() {
    return (
        <div className="SidebarClose" onClick={sidebarClose}>
            &times;
        </div>
    );
}

export default SidebarClose;
