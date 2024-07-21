import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productsPage/ProductPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout/Checkout";
import ScrollToTop from "./components/scrollTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
