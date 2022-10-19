import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Compare from './views/Compare';
import Products from './views/Products';
import Search from './views/Search';
import ShoppingCart from './views/ShoppingCart';
import WishList from './views/WishList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
