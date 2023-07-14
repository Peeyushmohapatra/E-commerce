import React, { useEffect, useReducer, useState } from "react";
import "./Productdetails.css";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from "../../Essentials/Carousellist";

const Productdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const notify = () => toast("Added To Cart");
  const dispatch = useDispatch()

  const state = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    getItem(id);
  }, []);

  const getItem = (id) => {
    setData(
      state.filter((ele) => {
        if (ele.id == id) {
          return ele;
        }
      })
    );
  };




  return (
    <>
      {data !== "" ? (
        data.map((item) => {
          return (
            <div className="proctDetailsPage">
              <div className="leftContainer">
                <img src={item.image} alt="" />
              </div>
              <div className="rightContainer">
                <h3>{item.category.toUpperCase()}</h3>
                <br />
                <h1>{item.title}</h1>
                <br />
                <h6>{Math.floor(item.rating.rate) == 5 ? "⭐⭐⭐⭐⭐" : Math.floor(item.rating.rate) == 4 ? "⭐⭐⭐⭐" : Math.floor(item.rating.rate) == 3 ? "⭐⭐⭐" : Math.floor(item.rating.rate) == 2 ? "⭐⭐" : "⭐"}</h6>
                <br />
                <h1><b>$ {item.price}</b></h1>
                <br />
                <p>{item.description}</p>
                <br />
                <div className="buttonContainer">
                <button  onClick={() => {
                notify()
                addToCart(item,dispatch)

              }} className="addtocart2">Add To Cart</button>
              <ToastContainer autoClose={1500} closeOnClickrtl={false} />
              <Link to="/cart">
              <button className="gotoCartButton">Go To Cart</button>
              </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="proctDetailsPage">
          <div className="leftContainer">
            <Skeleton width={700} height={400} />
          </div>
          <div className="rightContainer">
            <Skeleton width={"30%"} height={"150%"} />
            <br />
            <Skeleton width={"90%"} height={"180%"} />
            <br />
            <Skeleton width={"20%"} height={"90%"} />
            <br />
            <Skeleton width={"90%"} height={"160%"} />
            <br />
            <Skeleton width={"90%"} height={"300%"} />
            <br />
            <br />
            <br />
            <Skeleton width={"10%"} height={"160%"} />
            <br />
            <Skeleton width={"12%"} height={"160%"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Productdetails;
