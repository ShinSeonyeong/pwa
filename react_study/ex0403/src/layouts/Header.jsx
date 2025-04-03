import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">
        <h2>홈</h2>
      </Link>
      <Link to="/contect">
        <h2>연락처</h2>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Link to="/user/33d49fbf-490c-4a33-9c3e-55aa7751ef65">
        <h2>Mypage</h2>
      </Link>
    </div>
  );
}
