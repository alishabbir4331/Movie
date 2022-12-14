import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Movie House</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/english">English Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/hindi">Hindi Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/south">Tamil Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/punjabi">Punjabi Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pakistani" >Pakistani Movies</NavLink>
        </li>
      </ul>
      <form className=" d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit"><i class="fa-light fa-magnifying-glass"></i></button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Navbar