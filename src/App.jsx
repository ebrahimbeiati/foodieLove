import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Review from "./components/Review";
import MenuCard from "./layouts/MenuCard";
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
      </main>

     
      
      <Order />
      <Review />
    </>
  );
};

export default App;
