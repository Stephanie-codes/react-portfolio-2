import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
  )
}
