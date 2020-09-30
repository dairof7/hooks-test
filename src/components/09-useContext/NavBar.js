import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <Link to='/' className="navbar-brand">Menu</Link>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      {/* exact me permite que el match se haga con la ruta exacta
      activeClassname se usa con Navlink para identificar en que ruta me encuentro */}
        <NavLink exact activeClassName='active' to='/' className="nav-link"> Home </NavLink>
        <NavLink exact activeClassName='active' to='/login' className="nav-link"> Login </NavLink>
        <NavLink exact activeClassName='active' to='/about' className="nav-link"> About </NavLink>
    </ul>
  </div>
</nav>
  )
}
