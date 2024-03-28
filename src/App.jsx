import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Review from "./components/Review";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div className="menu-section" id="menu">
          <Menu />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="review">
          <Review />
        </div>
        <div id="order">
          <Order />
        </div>
          
      </main>
      <Footer />
      
    </>
  );
};

export default App;
