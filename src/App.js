import React, {useState, useEffect} from 'react';
import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductContext, FeaturedProductContext, SaleProductContext } from './contexts/Contexts';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Compare from './views/Compare';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Search from './views/Search';
import ShoppingCart from './views/ShoppingCart';
import WishList from './views/WishList';

function App() {

  const [allProducts, setallProducts] = useState ([]) /* listan av produkter läggs in här för att kunna nås av olika sidor genom att lägga till items={products} på den vyn där man vill nå den */
  const [featuredProducts, setfeaturedProducts] = useState ([])
  const [saleProducts, setsaleProducts] = useState([])


  useEffect(() => { /* vi hämtar produktinformation från vår API */
    const fetchallProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setallProducts(await result.json())
    }
    fetchallProducts()

    const fetchfeaturedProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setfeaturedProducts(await result.json())
    }
    fetchfeaturedProducts()

    const fetchsaleProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setsaleProducts(await result.json())
    }
    fetchsaleProducts()

  }, [setallProducts, setfeaturedProducts, setsaleProducts]) /* [] är en trigger */

  return (
    <BrowserRouter>
      <ProductContext.Provider value={allProducts}> {/* alla routes som vi har kan utnyttja denna provider som vi har  */}
      <FeaturedProductContext.Provider value={featuredProducts}>
      <SaleProductContext.Provider value={saleProducts}>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} /> {/* dessa gör att man kan navigera sig mellan knappar/länkar/kategorier */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShoppingCartProvider> 
      </SaleProductContext.Provider>
      </FeaturedProductContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
