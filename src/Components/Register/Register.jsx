import React from "react";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Register = () => {
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
                <Form.Control type="email" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Email id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" />
            </Form.Group>

            <Row className="mb-3"></Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
