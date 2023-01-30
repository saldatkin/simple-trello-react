import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"

export const Navigation = () => {
  return(
    <Fragment>
      <nav className="navbar">
        <Link to='/'>
        </Link>
        <div className="navbar__links">
          <Link to='/shop'>
            SHOP
          </Link>
          <p></p>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}