import React from "react";
import { Link } from "react-router-dom";

export function Sidebar({ text }) {
  console.log("prop", text);
  return (
    <div>
      <h2>Sidebar</h2>
      {text === "about" ? (
        <p>
          <Link to="/about/1">Content-1</Link>
          <Link to="/about/2">Content-2</Link>
        </p>
      ) : (
        <>
          <p>Reach out to me : sadhna@gmail.com</p>
        </>
      )}
    </div>
  );
}
