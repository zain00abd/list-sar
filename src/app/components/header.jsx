import Link from 'next/link';
import React from 'react';
import "../globals.css"

const Header = (active) => {
  
  return (
    <nav
    className="navbar"
    style={{
      backgroundColor: "#00162586",
      bottom: 0,
      position: "fixed",
      width: "100%",
      transform: "rotateX(180deg)",
      zIndex: "10"
    }}
    data-bs-theme="dark"
  >
    <div className="container-fluid">
      <form
        className="d-flex"
        role="search"
        style={{ transform: "rotateX(180deg)", width: "70%" }}
      >
        <div className="input-group">
          <button className="btn btn-success" type="submit">
            <i
              className="fa-solid fa-magnifying-glass fa-lg"
              style={{ color: "#ffffff" }}
            />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
          <div className="dropup-center dropup">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className="fa-solid fa-filter fa-lg"
                style={{ color: "#ffffff" }}
              />
            </button>
            <ul className="dropdown-menu text-center">
              <li>
                <Link className="dropdown-item" href="#">
                  {" "}
                  تنجيد{" "}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  {" "}
                  خياطة{" "}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  {" "}
                  تفصيل{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </form>
      <button
        style={{ transform: "rotateX(180deg)" }}
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ transform: "rotateX(180deg)" }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className={`nav-link ${active.active == "home" ? "active" : ""}`} href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${active.active == "adduser" ? "active" : ""}`} href="/adduser">
              Adduser
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" aria-disabled="true" href="">
              Disabled
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
