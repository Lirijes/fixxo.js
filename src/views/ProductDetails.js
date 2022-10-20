import React from 'react'
import MainMenuSection from '../section/MainMenuSection'
import FooterSection from '../section/FooterSection'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams()

  return (
    <>
        <MainMenuSection />
        <div className="container mt-5">
            <h1>{params.id}</h1>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetails