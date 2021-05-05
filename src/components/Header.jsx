import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/sun">Sun</Link>
      <Link to="/moon">Moon</Link>
    </div>
  );
};

export default Header;
