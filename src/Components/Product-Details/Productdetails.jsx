import React, { memo, useEffect, useState } from "react";
import "./Productdetails.css";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../Essentials/Carousellist";

const Productdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const notify = () => toast("Added To Cart");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.product;
  });

  async function getProduct(id) {
    const reps = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await reps.json();
    console.log(json);
    setData(json);
  }

  useEffect(() => {
    getProduct(id);
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
        <div key={data.id} className="proctDetailsPage">
          <div className="leftContainer">
            <img src={data.image} alt="" />
          </div>
          <div className="rightContainer">
            <h3>{data.category.toUpperCase()}</h3>
            &nbsp;
            <h2 className="title">{data.title}</h2>
            &nbsp;
            <h6>
              {Math.floor(data.rating.rate) === 5
                ? "⭐⭐⭐⭐⭐"
                : Math.floor(data.rating.rate) === 4
                ? "⭐⭐⭐⭐"
                : Math.floor(data.rating.rate) === 3
                ? "⭐⭐⭐"
                : Math.floor(data.rating.rate) === 2
                ? "⭐⭐"
                : "⭐"}
            </h6>
            &nbsp;
            <h1>
              <b>₹ {(data.price * 82.72).toFixed(2)}</b>
            </h1>
            &nbsp;
            <p>{data.description}</p>
            &nbsp;
            <div className="buttonContainer">
              <button
                onClick={() => {
                  notify();
                  addToCart(data, dispatch);
                }}
                className="addtocart2"
              >
                Add To Cart
              </button>
              <ToastContainer autoClose={1500} closeOnClickrtl={false} />
              <Link className="aLink" to="/cart">
                <button className="gotoCartButton">Go To Cart</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="proctDetailsPage">
          <div className="leftContainer">
            <Skeleton width={400} height={400} />
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
