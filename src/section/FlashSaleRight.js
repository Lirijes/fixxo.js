import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

const FlashSaleRight = () => {

  const [products, setProducts] = useState([
    {id: 15, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 16, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 17, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 18, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
])

  return (
    <section className="flash-sale-right container">
        <div className="row row-cols-2 row-cols-md-2 g-4 flash-sale-right-cards" style={{"width" : "90%"}}>
              {
              products.map(product => <ProductCard item={product} />)
              }
        </div>
        <div className="flash-sale-box">
            <h1>2 FOR USD $29</h1>
            <button type="button" className="btn btn-red">FLASH SALE</button>
        </div>
    </section>
  )
}

export default FlashSaleRight