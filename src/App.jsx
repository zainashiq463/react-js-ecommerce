import ProductsDisplay from './components/ProductsDisplay'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Profile from './components/Profile'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from "./context/CartContext";
import AppLayout from './components/AppLayout'
import ProductDetails from './components/ProductDetails'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<ProductsDisplay />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
