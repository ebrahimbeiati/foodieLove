import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Review from "./components/Review";
import FoodMenu from "./components/FoodMenu";
import DrinkMenu from "./components/DrinkMenu";
import OrderPage from "./components/OrderPage";
import About from "./components/About";
import { OrderProvider } from "./contexts/OrderContext";
import ContactPage from "./components/ContactPage";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  return (
    <Router>
      <OrderProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/drink" element={<DrinkMenu />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/review" element={<Review />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
       
      </OrderProvider>
      <Footer />
    </Router>
  );
};

export default App;
