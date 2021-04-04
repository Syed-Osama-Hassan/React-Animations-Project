import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

export const Navbar = () => {
  const [colorChange, setColor] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          colorChange
            ? "bg-success sticky-top navbar-dark"
            : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            C /\ M O
          </a>
          <div
            className="collapse navbar-collapse container"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  BLOG
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LANGUAGE
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      English
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Urdu
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <button
                className={`btn ${colorChange ? "btn-light" : "btn-success"}`}
                type="submit"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
