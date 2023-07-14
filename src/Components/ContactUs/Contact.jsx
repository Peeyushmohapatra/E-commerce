import React from "react";
import "./Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactHeading">
        <h1>
          <b>Have Some Question?</b>
        </h1>
        <hr />
      </div>
      <div className="contactForm">
        <div className="leftContact">
          <img
            src="https://e-mart-sooty.vercel.app/assets/images/contact.png"
            alt=""
          />
        </div>
        <div className="rightContact">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="John Smith" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="outline-primary">Send Message</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Contact;
