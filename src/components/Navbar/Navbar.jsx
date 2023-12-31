import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <div className="nav">
    //     <NavLink exact to="/home">Home</NavLink>
    //     <NavLink exact to="/about">About</NavLink>
    //     <NavLink exact to="/search">Search</NavLink>
    //     <NavLink exact to="/contact">Contact</NavLink>
    // </div>
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*=============== BOXICONS ===============*/}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />
      {/*=============== CSS ===============*/}
      <link rel="stylesheet" href="assets/css/styles.css" />
      {/*=============== HEADER ===============*/}
      <header className="header" id="header">
        <nav className="nav container">
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink exact to="/home" className="nav__link active-link">
                  <i className="bx bx-home-alt nav__icon" />
                  <span className="nav__name">Home</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink exact to="/about" className="nav__link">
                  <i className="bx bx-user nav__icon" />
                  <span className="nav__name">About</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink exact to="/search" className="nav__link">
                  <i className="bx bx-briefcase-alt nav__icon" />
                  <span className="nav__name">Search</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink exact to="/contact" className="nav__link">
                  <i className="bx bx-message-square-detail nav__icon" />
                  <span className="nav__name">Contactme</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>      
    </>
  );
};

export default Navbar;
