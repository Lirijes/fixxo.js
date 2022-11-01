import React from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const FlashSaleLeft = () => {

    const [products, setProducts] = useState([
      {id: 10, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
      {id: 11, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
      {id: 12, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
      {id: 13, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
])


  return (
    <section className="flash-sale-left container">
        <div className="flash-sale-box">
            <h1>2 FOR USD $29</h1>
            <button type="button" className="btn btn-red">FLASH SALE</button>
        </div>
        <div className="row row-cols-2 row-cols-md-2 g-4 flash-sale-left-cards" style={{"width" : "90%"}}>
            {
              products.map(product => <ProductCard item={product} />)
            }
        </div>
    </section>
  )
}

export default FlashSaleLeft