// import About from "./components/About";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import Navbar from "./components/Navbar";
// import Review from "./components/Review";
// import FoodMenu from "./components/FoodMenu";
// import DrinkMenu from "./components/DrinkMenu";
// import OrderPage from "./components/OrderPage";
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <div id="home">
//           <Home />
//         </div>
//         <div className="menu-section" id="menu">
//           <Menu />

        
//         </div>
//         <div id="drink">
//           <DrinkMenu />
//         </div>
//         <div id="food">
//           <FoodMenu />
//         </div>

//         <div id="about">
//           <About />
//         </div>
//         <div id="review">
//           <Review />
//         </div>
//         <div id="order">
//           <OrderPage />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from "react";
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

const App = () => {
  return (
    <OrderProvider>
      {" "}
      {/* Move the OrderProvider here to wrap the entire application */}
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div className="menu-section" id="menu">
          <Menu />
        </div>
        <div id="drink">
          <DrinkMenu />
        </div>
        <div id="food">
          <FoodMenu />
        </div>
        <div id="review">
          <Review />
        </div>
        <div id="order">
          <OrderPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </main>
      <Footer />
    </OrderProvider>
  );
};

export default App;

