import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ContactUsSection from '../section/ContactUsSection'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import MapSection from '../section/MapSection'


const Contact = () => {
  window.top.document.title = 'Contact | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contact"/>
      <MapSection />
      <ContactUsSection />
      <FooterSection />
    </>
  )
}

export default Contact