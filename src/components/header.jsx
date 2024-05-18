import * as React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      This is the header Links
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}