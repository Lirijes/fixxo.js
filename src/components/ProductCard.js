import React from 'react'
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {

    const addToWishList = (e) => {
        console.log("added to wishlist")
    }

    const addToCompare = (e) => {
        console.log("added to compare")
    }

    const addToCart = (e) => {
        console.log("added to shoppingcart")
    }


  return (
    <div className="col">
        <div className="card">
            <ul className="card-menu">
                <li>
                    <button onClick={addToWishList} className="btn btn-light"><i className="fa-regular fa-heart"></i></button>
                </li>
                <li>
                    <button onClick={addToCompare} className="btn btn-light"><i className="fa-regular fa-code-compare"></i></button>
                </li>
                <li>
                    <button onClick={addToCart} className="btn btn-light"><i className="fa-regular fa-bag-shopping"></i></button>
                </li>
            </ul>
            <div className="card-body">
                <Link className="btn btn-red" to="/product/id" target="_blank" >QUICK VIEW</Link> {/* använder Link istället för NavLink för att kunna använda target blank och öppna sidan i en ny tab */}
                <div className="card-info">
                    <p className="category">{item.category}</p>
                    <h1>{item.name}</h1>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="card-price">  {/* delas upp separat för att använda flexbox */}
                    <p className="card-old-price">{item.oldprice}</p>
                    <p className="card-dicsount-price">{item.discountprice}</p>
                </div>
            </div>
            <div className="card-background"></div>
        </div>
    </div>
  )
}

export default ProductCard