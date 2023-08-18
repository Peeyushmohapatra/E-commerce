import React, { useState } from "react";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

// import { json } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()


  const notify = () => toast("Register Successfully");

  const [data,setData] = useState({
    username:"",
    name:"",
    email:"",
    password:""
  })

  function validate(data){
    if(data.username === "" || data.name === "" || data.email === "" || data.password === ""){
      alert("All Field is required !!")
      return
    }else{
      localStorage.setItem("user-data",JSON.stringify(data))
      notify()
      navigate("/login")
    
    }
    // console.log(data);
  }



  return (
    <div className="registerContainer">
      <div className="innerRegisterContainer">
        <div className="innerUpperContainer">
          <h5>
            <b>Join our Community!</b>
          </h5>
        </div>
        <div className="innerLowerContainer">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => {
                  setData({
                    ...data,
                    username:e.target.value
                  })
                }} type="name" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control onChange={(e) => {
                  setData({
                    ...data,
                    name:e.target.value
                  })
                }} type="text" placeholder="Full Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => {
                  setData({
                    ...data,
                    email:e.target.value
                  })
                }} placeholder="Email id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => {
                  setData({
                    ...data,
                    password:e.target.value
                  })
                }} placeholder="Password" />
            </Form.Group>

            <Row className="mb-3"></Row>
            <ToastContainer autoClose={1000} position="top-center" />
            <Button onClick={() => {
              // validate(data)
              validate(data)
            }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
