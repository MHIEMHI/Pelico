import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingContext';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { ProductInfo } from './pages/ProductInfo';
import { Products } from './pages/Products';

function App ()
{
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductInfo />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
