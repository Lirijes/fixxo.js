import React, { useContext } from 'react'
import Showcase from '../section/ShowcaseSection'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'
import ConsciousSection from '../section/ConsciousSection'
import FlashSaleLeft from '../section/FlashSaleLeft'
import FlashSaleRight from '../section/FlashSaleRight'
import BottomMenuSection from '../section/BottomMenuSection'
import { ProductContext } from '../contexts/Contexts'

const Home = () => {
  window.top.document.title = 'Fixxo.' //detta gör att namnet på fliken ändras

  const productContext = useContext(ProductContext) /* här vill vi använda oss av contexten ProductContext */

  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection />
      </header>
      <Showcase />
      <ProductGridSection titel="Product Grid Section" items={productContext.featuredProducts} /> {/* här hämtas produkterna i listan in och läggs in i den sectionen */}
      <ConsciousSection />
      <FlashSaleLeft title="Flash Sale Left" items={productContext.saleProducts} />
      <FlashSaleRight title="Flash Sale Right" items={productContext.saleProducts} />
      <BottomMenuSection />
      <FooterSection />
    </>
  )
}

export default Home