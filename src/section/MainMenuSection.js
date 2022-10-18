import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <div className="menu-bar">
        <div className="container">
            <div className="logo">
                Fixxo.
            </div>
            <div className="menu-links">
                <NavLink className="menu-link" to="/">Home</NavLink>
                <NavLink className="menu-link" to="/categories">Categories</NavLink>
                <NavLink className="menu-link" to="/products">Products</NavLink>
                <NavLink className="menu-link" to="/contact">Contact</NavLink>
            </div>
            <span className="circle-icon">
                <MenuIcon className="btn btn-light" link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare" />
                <MenuIcon button link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon button="btn btn-light" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </span>
        </div>
    </div>
  )
}

export default MainMenuSection