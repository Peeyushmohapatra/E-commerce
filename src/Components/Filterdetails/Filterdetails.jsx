import React, { memo, useEffect, useState } from "react";
import "./Filterdetails.jsx.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Productslist, searchFunction, setData } from "../../Essentials/Carousellist";


const Filterdetails = () => {
  const [form, setForm] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.product;
  });


  useEffect(() => {
    Productslist(dispatch);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  setData("all", dispatch, state);
                }}
              >
                All
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setData("men's clothing", dispatch, state);
                }}
              >
                Men's Clothing
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setData("women's clothing", dispatch, state);
                }}
              >
                Women's Clothing
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setData("jewelery", dispatch, state);
                }}
              >
                Jewelery's
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setData("electronics", dispatch, state);
                }}
              >
                Electronics
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e) => {
                  setForm(e.target.value);
                }}
                type="search"
                placeholder="🔍 Here !!!"
                className="me-2"
                aria-label="Search"
              />
             
              <Button onClick={() => {
                  searchFunction(form, dispatch, state);
                }} variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default memo(Filterdetails);
