import React from 'react'

const Navbar = () => {
  return (
    <nav className="__navbar">
        <div className="container">
            <div className="logo">Fixxo.</div>
            <div className="category-links">
                <a className="__active" href="index.html">Home</a>
                <a href="#">Categories</a>
                <a href="#">Products</a>
                <a href="contacts.html">Contacts</a>
            </div>
            <span className="circle-icon">
                    <button type="button" className="btn btn-light">
                        <a href="#"><i className="fa-regular fa-magnifying-glass"></i></a>
                    </button>
                    <button type="button" className="btn btn-light">
                        <a href="#"><i className="fa-regular fa-code-compare"></i></a>
                    </button>
                    <button type="button" className="btn btn-light">
                        <a href="#">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span>
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </button>
                    <button type="button" className="btn btn-light">
                        <a href="#">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span>
                            <i className="fa-regular fa-bag-shopping"></i>
                        </a>
                    </button>
                </span>
        </div>
    </nav>
  )
}

export default Navbar