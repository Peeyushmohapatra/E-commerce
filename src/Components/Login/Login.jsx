import React, { useEffect, useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";



const Login = ({setLogin}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()

  const notify = () => toast("Welcome to e-Mart");
  const [userdata,setUserdata] = useState("")

  function validateUser(email,password){
    console.log(userdata);
    if(email === "" || password === ""){
      alert("Invalid Details")
      return
    }
    if(userdata === null){
      alert("Please Register First !!")
      navigate('/register')
      return
    }

    else if(userdata !== "" && email === userdata.email && password === userdata.password){
      notify()
      setLogin(true)
      navigate("/")
    }
  }

  // const notify = () => toast("Item added to cart");


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user-data"));
    // console.log(data);
    setUserdata(data)
  },[userdata])

  return (
    <div className="login">
      <div className="innerLoginContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => {
              setEmail(e.target.value)
            }} type="email" placeholder="name@example.com" />
            <p>We'll never share your email with anyone else.</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => {
              setPassword(e.target.value)
            }} type="password" placeholder="" />
          </Form.Group>
        </Form>
        <Button onClick={() => {
          validateUser(email,password)
        }} variant="outline-secondary">Sign In</Button>
        <ToastContainer autoClose={1000} position="top-center" />
        <p>Don't have an account? <Link to="/register"><u>Create an account</u></Link></p>
      </div>
    </div>
  );
};

export default Login;
