import React from 'react';
import './Navbar.css';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import logo from './../../images/th-removebg-preview.png';

function Navbar(){
  return(  <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="nav-logo">
    <img src={logo} alt="logo"/>
    <h3>Products</h3>
    </div>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div className="nav-centre mx-auto">
      <form class="d-flex">
      <SearchIcon style={{color:"#ccc", marginTop:"6px"}}/>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      </div>
      <ul className="navbar-nav ms-auto">
      <div className="nav-right ">
      <li className="nav-item mx-2 my-3 right">
       <Avatar />
      </li>
      <li className="nav-item mx-2 my-3 right">
      <InboxIcon />
      </li>
      </div>
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
