import * as React from "react";
import { Link } from "react-router-dom";

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
