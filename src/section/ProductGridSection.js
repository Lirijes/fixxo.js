import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

const ProductGridSection = () => {

  const [products, setProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 2, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 3, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 4, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 5, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 6, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 7, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5},
    {id: 8, name: "Modern Black Blouse", category: "Category", oldprice: "$35.00", discountprice: "$30.00", rating: 5}
  ])

  return (
    <section>
        <div className="product-grid">
            <div className="container">
                <div className="featured-product-header">Featured Product</div>
                <div className="grid">
                    {
                      products.map(product => <ProductCard item={product} />)
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection