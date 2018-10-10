import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => 
  <nav className="intor-nav">
    <Link to="/"><h3>The Neighborhood</h3></Link>

    <Link to="/members"><p>Members</p></Link>
  </nav>

export default Nav;