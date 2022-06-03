import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
            <ul>
                <div className="elements">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;