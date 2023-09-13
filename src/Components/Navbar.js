import React from 'react';
import { Link } from 'react-router-dom';
import userfacet_logo from "../userfacet_logo.png";
export default function Navbar() {
  return (
    <>
    <nav className="navbar bg-dark border-bottom border-body">
    <div className="container">
      <Link className="navbar-brand" to="https://www.userfacet.com/" target='_blank'>
        <img src={userfacet_logo} alt="Userfacet" width="60px" height="60px"/>
      </Link>
    </div>
  </nav>
    </>
  )
}
