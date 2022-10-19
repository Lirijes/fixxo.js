import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({button, link, icon, quantity}) => {
  return (
    <button type={button} className="btn btn-light" >
        <NavLink className="menu-icon" to={link} end>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
            <i className={icon}></i>
        </NavLink>
    </button>
  )
}

export default MenuIcon