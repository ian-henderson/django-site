import React from "react";
import { Link } from "react-router-dom";

const Navigation = props =>
  <nav className="navbar navbar-expand-sm navbar-light mb-3">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {props.title}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Projects
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/polls" className="dropdown-item">
                Polls
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Navigation;