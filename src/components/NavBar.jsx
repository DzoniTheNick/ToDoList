import React from "react";
import {RiTodoLine} from "react-icons/ri";

function NavBar(){
    return(
        <div className="navBar">
            <ul>
                <div className="elements">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;