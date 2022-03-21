import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [items, setItems] = useState(["About", "Projects", "Contact"]);
  return (
    <div className="navbar">
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default Navbar;
