// src/layouts/AWSLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function AWSLayout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <NavLink to="ec2">EC2</NavLink>
        <NavLink to="s3">S3</NavLink>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default AWSLayout;
