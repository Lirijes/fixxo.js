import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title, items = []}) => {

  return (
    <section>
        <div className="product-grid">
            <div className="container">
                <h1>{title}</h1>
                <div className="featured-product-header">Featured Product</div>
                <div className="grid">
                    {
                      items.map(product => <ProductCard key={product.articleNumber} item={product} />) /* här lägger vi in våra produkter, på vår home vy lägger vi in product.context för att de ska synas */
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection