import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xxl navbar-light sticky-top py-3 py-lg-5 fs-1  "
      style={{ backgroundColor: "#86cb92" }}
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand active fs-1" aria-current="page">
          Tracking system
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5" >
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link px-3">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tasks"} className="nav-link px-3">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/epic"} className="nav-link px-3">
                Epic
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/reports"} className="nav-link px-3">
                Reports
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
