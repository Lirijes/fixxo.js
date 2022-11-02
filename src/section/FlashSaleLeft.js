import React from 'react'
import ProductCard from '../components/ProductCard'

const FlashSaleLeft = ({items =[]}) => {

  return (
    <section className="flash-sale-left container">
        <div className="flash-sale-box">
            <h1>2 FOR USD $29</h1>
            <button type="button" className="btn btn-red">FLASH SALE</button>
        </div>
        <div className="row row-cols-2 row-cols-md-2 g-4 flash-sale-left-cards" style={{"width" : "90%"}}>
            {
              items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </section>
  )
}

export default FlashSaleLeft