import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hooks
                </a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/use-effect"> Use Effect</Link></li>
                  <li><a className="dropdown-item" to="/use-state"> Use State</a></li>
                  <li><a className="dropdown-item" to="#">Use Ref </a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/use-memo"> Use Memo </Link></li>
                  <li><a className="dropdown-item" href="#"> Use Callback </a></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to={"/user-list"} className="nav-link " > User List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link " >About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link " >Contact Us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/counter"} className="nav-link " > Counter </NavLink>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Header;