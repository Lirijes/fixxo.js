import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({button, link, icon}) => {
  return (
    <button type={button} className="btn btn-light">
        <NavLink className="menu-icon" to={link}>
            <i className={icon}></i>
        </NavLink>
    </button>
  )
}

export default MenuIcon