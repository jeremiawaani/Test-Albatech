import React from "react";
import "./sidebar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/Alba.svg" alt="logo"/>
      </div>
      <ul>
        <li>
          <a>Service</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Portofolio</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Career</a>
        </li>
        <button className="button_contact">Contact Us</button>
      </ul>
    </nav>
  );
};

export default Navbar;
