import React from "react";
import { Link } from "react-router-dom";

export default function NavBar()
{
    return (
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Contact">Contacts</Link>
        </nav>

    );
}