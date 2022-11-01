import React from 'react'
import MainMenuSection from '../section/MainMenuSection'
import FooterSection from '../section/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ProductDescriptionSection from '../section/ProductDescriptionSection'

const ProductDetails = () => {

    let currentPage = "Product Details"
    window.top.document.title = `${currentPage} || Fixxo` 

      const params = useParams()

    return (
      <>
          <MainMenuSection />
          <p className="top-info">Get 25% OFF at the Fixxo Selection - Shop Now!</p>
          <BreadcrumbSection currentPage="Product Description" />
          <ProductDescriptionSection />
          <div className="container mt-5">
              <h1>{params.id}</h1>
          </div>
          <FooterSection />
      </>
  )
}

export default ProductDetails