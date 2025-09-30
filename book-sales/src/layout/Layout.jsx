import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const activeClass = ({ isActive }) =>
    `nav-link px-2 ${isActive ? "active fw-semibold text-primary border-bottom border-2 border-primary" : ""}`;

  return (
    <div className="container">
      {/* HEADER */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink to="/" end className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl text-primary"></i>
            <span className="ms-2 fs-4">Book Store</span>
          </NavLink>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" end className={activeClass}>Home</NavLink></li>
          <li><NavLink to="/book" className={activeClass}>Book</NavLink></li>
          <li><NavLink to="/team" className={activeClass}>Team</NavLink></li>
          <li><NavLink to="/contact" className={activeClass}>Contact</NavLink></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </header>

      <Outlet />

      {/* FOOTER */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><NavLink to="/" end className="nav-link px-2 text-body-secondary">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/book" className="nav-link px-2 text-body-secondary">Book</NavLink></li>
            <li className="nav-item"><NavLink to="/team" className="nav-link px-2 text-body-secondary">Team</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link px-2 text-body-secondary">Contact</NavLink></li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 NF Academy</p>
        </footer>
      </div>
    </div>
  );
}
