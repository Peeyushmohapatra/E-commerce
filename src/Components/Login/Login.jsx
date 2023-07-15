import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login">
      <div className="innerLoginContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <p>We'll never share your email with anyone else.</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
        </Form>
        <Button variant="outline-secondary">Sign In</Button>
        <p>Don't have an account? <Link to="/register"><u>Create an account</u></Link></p>
      </div>
    </div>
  );
};

export default Login;
