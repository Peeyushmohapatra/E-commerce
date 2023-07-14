import "./App.css";
import Slider from "./Components/Image-Slider/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";
import Products from "./Components/Products/Products";
import {Routes,Route} from "react-router-dom"
import Productdetails from "./Components/Product-Details/Productdetails";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";


function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<><Slider/> <Products/></>} />
        <Route path="/products" element={<> <Products/></>} />
        <Route path="/about" element={<> <About/></>} />
        <Route path="/contact" element={<> <Contact/></>} />
        <Route path="/productdetails/:id" element={<><Productdetails/></>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
