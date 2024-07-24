import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productsPage/ProductPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout/Checkout";
import ScrollToTop from "./components/scrollTop";
import LoginPop from "./components/Login/LoginPop";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ScrollToTop />
      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}

      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
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
