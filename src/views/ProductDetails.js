import React, { useState, useEffect } from 'react'
import MainMenuSection from '../section/MainMenuSection'
import FooterSection from '../section/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ProductDescriptionSection from '../section/ProductDescriptionSection'


const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() =>  {
    const fetchData = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
      setProduct(await result.json())
    }
    fetchData()
  }, [])

    return (
      <>
          <MainMenuSection />
          <p className="top-info">Get 25% OFF at the Fixxo Selection - Shop Now!</p>
          <BreadcrumbSection parentPage="Product Description" currentPage={product.name} />
          <ProductDescriptionSection product={product} />
          <FooterSection />
      </>
  )
}

export default ProductDetails