import React from 'react'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'

const Home = () => {
  return (
    <>
      <header style={{ backgroundColor : "lightgray", height : "850px" }}>
        <MainMenuSection />
      </header>
      <FooterSection />
    </>
  )
}

export default Home