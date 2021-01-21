import React from "react";
import "./Topmenu.css";

interface PropTypes {
    handleClick: () => void;
}

function Topmenu(props: PropTypes) {
    return (
        <div className="Topmenu">
            <button className="SidebarButton" onClick={props.handleClick}>
                X
            </button>
            Topmenu
        </div>
    );
}

export default Topmenu;
