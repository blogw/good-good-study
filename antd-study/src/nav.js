import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <div>
      <NavLink exact to="/">
        Hello World
      </NavLink>
      |&nbsp;
      <NavLink to="/sample1">Antd First</NavLink> |&nbsp;
      <NavLink to="/sample2">Antd Second</NavLink>
    </div>
  </div>
);
export default NavBar;
