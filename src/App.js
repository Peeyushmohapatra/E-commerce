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
import Logincomp from "./Components/Logincomp";


function App() {
      

  const [state,setState] = useState(false)  
  const [isLogin,setLogin] = useState(JSON.parse(localStorage.getItem("isLogin")))
  useEffect(() => {
    isLogin === true ? localStorage.setItem("isLogin",JSON.stringify(true)) : localStorage.setItem("isLogin",JSON.stringify(false))
  },[])
  
  return (
    <div className="App">
      {isLogin ? <Navigation isLogin={isLogin} state={state} setState={setState} setLogin={setLogin}/> : null}

      <Routes>
        <Route path="/" element={isLogin === false ? <Login setLogin={setLogin}/> : <><Slider/> <Products/></>} />
        <Route path="/products" element={isLogin === false ? <Login setLogin={setLogin}/> : <Products/>} />
        <Route path="/about" element={isLogin === false ? <Login setLogin={setLogin}/> : <About/>} />
        <Route path="/contact" element={isLogin === false ? <Login setLogin={setLogin}/> : <Contact/>} />
        <Route path="/register" element={<> <Register/></>} />
        <Route path="/login" element={<> <Login setLogin={setLogin}/></>} />
        <Route path="/productdetails/:id" element={ isLogin === false ? <><Login setLogin={setLogin}/></> : <Productdetails/>} />
        <Route path="/cart" element={isLogin === false ? <Login setLogin={setLogin}/> : <Cart/>} />
      </Routes>
      

      {isLogin ? <Footer/>: null}
      {/* <Logincomp/> */}
    </div>
  );
}

export default App;
