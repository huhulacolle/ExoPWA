import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" >Capsules</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/launches">Launches</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root