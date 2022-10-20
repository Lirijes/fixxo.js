import React from 'react'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'

const Home = () => {
  return (
    <>
      {/* <header style={{ backgroundColor : "lightgray", height : "850px" }}> */}
        <MainMenuSection />
      {/* </header> */}
      <ProductGridSection />
      <FooterSection />
    </>
  )
}

export default Home