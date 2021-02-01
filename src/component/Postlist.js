import React from "react";
import "./Postlist.css";
import Post from "./Post";

const x = "2021-01-23-DLFS-1st";
const y = "2021-01-28-DLFS-2nd";

function Postlist() {
    return (
        <ol className="postlist">
            <li className="eachpost">목록1</li>
            <li className="eachpost">목록2</li>
        </ol>
    );
}

export default Postlist;
