// src/components/TopNav.jsx
import { NavLink } from "react-router-dom";
import "./TopNav.css";

function TopNav() {
  return (
    <nav className="top-nav">
      <NavLink to="/java/StreamAPI">Java</NavLink>
    { /* <NavLink to="/aws/ec2">AWS</NavLink> */}
      {/* Add more tabs as needed */}
    </nav>
  );
}

export default TopNav;
