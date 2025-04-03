import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">
        <h1>홈</h1>
      </Link>
      <Link to="/contect">
        <h1>연락처</h1>
      </Link>
      <Link to="/about">
        <h1>About</h1>
      </Link>
    </div>
  );
}
