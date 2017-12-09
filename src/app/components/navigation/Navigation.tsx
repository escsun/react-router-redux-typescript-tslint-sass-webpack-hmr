import * as React from "react";

import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = (): JSX.Element => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__items">
        <li className="Navigation__item">
          <NavLink to="/" exact={true} className="Navigation__link link">Home</NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink to="/about" className="Navigation__link link">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
