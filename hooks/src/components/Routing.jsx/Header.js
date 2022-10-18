import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <ui>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ui>
    </div>
  );
}
