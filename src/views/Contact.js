import React from 'react'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'

const Contact = () => {
  window.top.document.title = 'Contact | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <h1>Contact</h1>
      <FooterSection />
    </>
  )
}

export default Contact