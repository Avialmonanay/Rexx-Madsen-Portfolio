import React from 'react';
import '../styles/Navbar.css'


function NavBar({ currentPage, handlePageChange }) {
 return (
  <header className="customHeader">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand customText nameHeader" href="#">Rexx Madsen</a>
      <button className="navbar-toggler collapser" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link customText" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customText" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customText" href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customText" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
)
}



export default NavBar