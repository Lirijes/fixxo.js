import React from 'react'
import Showcase from '../components/Showcase'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'

const Home = () => {
  window.top.document.title = 'Fixxo.' //detta gör att namnet på fliken ändras

  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection />
      </header>
      <Showcase />
      <ProductGridSection />
      <FooterSection />
    </>
  )
}

export default Home