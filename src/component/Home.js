import React from "react";
import "./Home.css";
import Postlist from "./Postlist";
import Post from "./Post";
const x = "2021-01-23-DLFS-1st";
const y = "2021-01-28-DLFS-2nd";
function Home() {
    return (
        <div className="Homepage" id="Homepage">
            <Post postTitle={y} />
        </div>
    );
}

export default Home;
