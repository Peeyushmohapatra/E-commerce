import React, { useRef } from "react";
import "./Payment.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

const Payment = () => {
  const itemCount = useSelector((state) => {
    return state.itemCount;
  });

  const ref = useRef(0)
  const inCart = useSelector((state) => {
    return state.inCart;
  });
  return (
    <div className="payment_container">
      <div className="left_payment_container">
        <h1>Billing Address</h1>
        <div className="name_container">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
        </div>
        <div className="email_container">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address (Optional)</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </div>
        <div className="address_container">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
        </div>

        <hr />
        <div className="check_box_container">
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Shipping address is the same as my billing address"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Save this information htmlFor next time"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </div>

        <hr />

        <div className="payment_mode_container">
          <Form>
            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check label="Credit Card" name="group1" type={type} />
                <Form.Check label="Debit Card" name="group1" type={type} />
                <Form.Check label="UPI" name="group1" type={type} />
              </div>
            ))}
          </Form>
        </div>

        <div className="name_container">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name on card</Form.Label>
              <Form.Control type="text" />
              <span>Full name as displayed on card.</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
        </div>

        <div className="card_data_container">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Expiration</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>CVV</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
        </div>

        <hr />
        <div className="last_button d-grid gap-2">
          <Button
            onClick={() => {
              console.log(itemCount);
              console.log(ref.current);
            }}
            variant="secondary"
            size="lg"
          >
            Click to pay
          </Button>
        </div>

        <br />
      </div>
      <div className="right_payment_container">
        <h4 className="h4">
          <span className="text-primary">Your Cart</span>
          <span className="bg-primary badge rounded-pill">{inCart.length}</span>
        </h4>
        <div>
          <ListGroup as="ul">
            {inCart &&
              inCart.map((item,idx) => {
                let sum = ((item.price * itemCount[(item.id)-1]) *  82.72)
                ref.current = ref.current+sum
                return (
                  <ListGroup.Item
                  key={item.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{item.title}</div>
                      {itemCount[(item.id)-1]}
                    </div>
                    <Badge bg="primary" pill>
                      {((item.price * itemCount[(item.id)-1]) * 82.72).toFixed(2)} ₹
                    </Badge>
                  </ListGroup.Item>
                );
              })}
              <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Total</div>
                      
                    </div>
                    <Badge bg="primary" pill>
                       {ref.current.toFixed(2)} ₹
                    </Badge>
                  </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Payment;
