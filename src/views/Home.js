import React from 'react'
import Showcase from '../section/ShowcaseSection'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'
import ConsciousSection from '../section/ConsciousSection'
import FlashSaleLeft from '../section/FlashSaleLeft'
import FlashSaleRight from '../section/FlashSaleRight'
import BottomMenuSection from '../section/BottomMenuSection'

const Home = () => {
  window.top.document.title = 'Fixxo.' //detta gör att namnet på fliken ändras

  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection />
      </header>
      <Showcase />
      <ProductGridSection />
      <ConsciousSection />
      <FlashSaleLeft />
      <FlashSaleRight />
      <BottomMenuSection />
      <FooterSection />
    </>
  )
}

export default Home