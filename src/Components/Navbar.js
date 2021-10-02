import React from 'react'
import './Navbar.css';
import logo from './olalogo-mb.png';
export default function Navbar() {
    return (

        <div>
        <div className="navbartop">
            <ul >
                <li><a href = "#">Drive with Ola</a> |</li>
                <li><a href = "#">Ola Money</a> |</li>
                <li><a href = "#">Ola Coporate</a> |</li>
                <li><a href = "#">Ola Foundation</a> |</li>
                <li><a href = "#">Share</a> |</li>
                <li><a href = "#">Offers</a> |</li>
                <li><a href = "#">Support</a></li>
            </ul>
        </div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" id="navit">
    <a className="navbar-brand" href="#"><img src={logo} id="logo" ></img></a>
    <button className="navbar-toggler" id="navbut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><span id="navlink">Ola Drive</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><span id="navlink">Ola Select</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><span id="navlink">Ola Fleet</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><span id="navlink">Features</span></a>
        </li>
        <div className="navbartop1">
                <li className="nav-item" ><a  className="nav-link" href = "#">Drive with Ola</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Ola Money</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Ola Coporate</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Ola Foundation</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Share</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Offers</a></li>
                <li className="nav-item" ><a  className="nav-link" href = "#">Support</a></li>

        </div>
        <li className="nav-item">
          <a className="btn" aria-current="page" href="#">Book Now</a>
        </li>
        </ul>

    </div>
  </div>
</nav>
        </div>
    )
}
