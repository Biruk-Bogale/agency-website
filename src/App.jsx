import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Producsts from "./components/Producsts";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Producsts />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
