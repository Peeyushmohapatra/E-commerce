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
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function App() {
  const [isLogin,setLogin] = useState("")

   
  
  return (
    <div className="App">
      <Navigation isLogin={isLogin} setLogin={setLogin} />

      <Routes>
        <Route path="/" element={isLogin === "" ? <Login setLogin={setLogin}/> : <><Slider/> <Products/></>} />
        <Route path="/products" element={isLogin === "" ? <Login setLogin={setLogin}/> : <Products/>} />
        <Route path="/about" element={isLogin === "" ? <Login setLogin={setLogin}/> : <About/>} />
        <Route path="/contact" element={isLogin === "" ? <Login setLogin={setLogin}/> : <Contact/>} />
        <Route path="/register" element={<> <Register/></>} />
        <Route path="/login" element={<> <Login setLogin={setLogin}/></>} />
        <Route path="/productdetails/:id" element={ isLogin === "" ? <><Login setLogin={setLogin}/></> : <Productdetails/>} />
        <Route path="/cart" element={isLogin === "" ? <Login setLogin={setLogin}/> : <Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
