import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [items, setItems] = useState(["Home", "About", "Projects", "Contact"]);
  return (
    <div className="navbar">
      {items.map((item) => (
        <a className="item-nav" key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
