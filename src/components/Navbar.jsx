import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">Metropolia campuses</span>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campuses">Campuses</NavLink>
      </div>
    </nav>
  );
}