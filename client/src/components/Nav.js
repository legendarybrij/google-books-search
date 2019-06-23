import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
             <Link to="/">Google Books</Link>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;