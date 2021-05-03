import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heaader">
      <Link>Home</Link>
      <Link>Sun</Link>
      <Link>Moon</Link>
    </div>
  );
};

export default Header;
