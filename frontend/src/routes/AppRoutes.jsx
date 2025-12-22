import { Routes, Route } from "react-router";
// Public Pages
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductList";
import CartPage from "../pages/Cart/CartPage";

// Auth Pages
import LoginPage from "../pages/User/LoginPage";
import RegisterPage from "../pages/User/RegisterPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Routes */}
      </Routes>
    </>
  );
};

export default AppRoutes;
