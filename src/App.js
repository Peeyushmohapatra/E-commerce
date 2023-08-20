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
import { useEffect, useState } from "react";
import Payment from "./Components/Payment/Payment";


function App() {
       
  const [isLogin,setLogin] = useState(JSON.parse(localStorage.getItem("isLogin")))
  useEffect(() => {
    isLogin === true ? localStorage.setItem("isLogin",JSON.stringify(true)) : localStorage.setItem("isLogin",JSON.stringify(false))
  },[isLogin])
  
  return (
    <div className="App">
      {/* {isLogin ? <Navigation isLogin={isLogin} state={state} setState={setState} setLogin={setLogin}/> : null} */}
      <Navigation isLogin={isLogin}  setLogin={setLogin}/>

      <Routes>
        <Route path="/" element={<><Slider/> <Products/><Footer/></>} />
        <Route path="/products" element={<><Products/><Footer/></>} />
        <Route path="/about" element={<><About/><Footer/></>} />
        <Route path="/contact" element={<><Contact/><Footer/></>} />
        <Route path="/register" element={<> <Register/></>} />
        <Route path="/login" element={<><Login setLogin={setLogin}/></>} />
        <Route path="/productdetails/:id" element={<><Productdetails/><Footer/></>} />
        <Route path="/cart" element={isLogin === false ? <Login setLogin={setLogin}/> : <><Cart/><Footer/></>} />
        <Route path="/payment" element={isLogin === false ? <Login setLogin={setLogin}/> : <><Payment/><Footer/></>} />
        {/* <Route path="/" element={isLogin === false ? <Login setLogin={setLogin}/> : <><Slider/> <Products/></>} /> */}
        {/* <Route path="/products" element={isLogin === false ? <Login setLogin={setLogin}/> : <Products/>} /> */}
        {/* <Route path="/about" element={isLogin === false ? <Login setLogin={setLogin}/> : <About/>} /> */}
        {/* <Route path="/contact" element={isLogin === false ? <Login setLogin={setLogin}/> : <Contact/>} /> */}
        {/* <Route path="/productdetails/:id" element={ isLogin === false ? <><Login setLogin={setLogin}/></> : <Productdetails/>} /> */}
      </Routes>


    </div>
  );
}

export default App;
