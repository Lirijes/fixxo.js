import React from 'react'


const ProductDescriptionSection = ({product}) => {

  return (
    <>
        <div className="product-description container">
            <div className="product-info-left">
                <div className="product-images">
                    <img className="big-img" src={product.imageName} alt="" />
                </div>
            </div>

            <div className="product-info-right">
                <div className="product-text">
                    <h1>{product.name}</h1>
                    <p className="product-id">ARTNR: {product.articleNumber} BRAND: Fixxo.</p>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="item-price">$ {product.price}</p>
                    <p className="item-info">
                        Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more)
                    </p>
                </div>
                <div className="shop-now">
                    <div className="chose-size">Size: 
                        <button className="sizes">S</button>
                        <button className="sizes">M</button>
                        <button className="sizes">L</button>
                        <button className="sizes">XL</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDescriptionSection