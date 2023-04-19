import React from "react";
import { NavLink } from "react-router-dom";

export default function Headeer() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="logo">
            <h2>Softkingo</h2>
          </div>
          <nav className="logo">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
        </div>

      </header>
    </div>
  );
}
