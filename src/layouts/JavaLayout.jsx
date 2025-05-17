// src/layouts/JavaLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function JavaLayout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
      <NavLink to="/java/StreamAPI">StreamAPI</NavLink>
       {/* <NavLink to="/java/arrays">Arrays</NavLink>
        <NavLink to="/java/multithreading">Multithreading</NavLink> */}
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default JavaLayout;