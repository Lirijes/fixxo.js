import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="menu-bar">
        <div className="container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>
            <div className={`menu-links ${showMenu ? "d-flex" : ""}`}>
                <NavLink className="menu-link" to="/" end>Home</NavLink>
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="menu-link" to="/products">Products</NavLink>
                <NavLink className="menu-link" to="/contact" end>Contact</NavLink>
            </div>
            <span className="circle-icon">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
                <MenuIcon hideOnMobile={true} quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            
                <button onClick={toggleMenu} className="d-lg-none btn btn-light btn-dropdown"><i className="fa-regular fa-bars"></i></button>

            </span>
        </div>
    </div>
  )
}

export default MainMenuSection