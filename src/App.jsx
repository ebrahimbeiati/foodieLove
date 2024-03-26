import About from "./components/About";
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
      </main>

      <About />

      <Menu />
      <Order />
      <Review />
    </>
  );
}

export default App
