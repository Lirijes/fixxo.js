import React, { useContext } from 'react'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'
import BreadcrumbSection from '../section/BreadcrumbSection'
import { ProductContext } from '../contexts/Contexts'

const Products = () => {

  let currentPage = "Products"
    window.top.document.title = `${currentPage} || Fixxo` 

  const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection titel="Product Grid Section" item={productContext.allProducts} />
      <FooterSection />
    </>
  )
}

export default Products