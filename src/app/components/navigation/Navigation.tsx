import * as React from "react";

import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__items">
        <li className="Navigation__item">
          <Link to="/" className="Navigation__link link">Home</Link>
        </li>
        <li className="Navigation__item">
          <Link to="/about" className="Navigation__link link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
