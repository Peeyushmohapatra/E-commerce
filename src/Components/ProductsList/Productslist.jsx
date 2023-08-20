import React, { memo } from "react";
import "./Productslist.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { addToCart } from "../../Essentials/Carousellist";



const Productslist = () => {
  const state = useSelector((state) => {
    return state.dataToShow;
  });


  const dispatch = useDispatch()

  

  const notify = () => toast("Item added to cart");

  return (
    <div className="listContainer">
      {state.length !== 0 ? (
        state.map((item) => {
          return (
            <div className="item">
              <img
                src={item.image}
                alt=""
              />
              <h5>{item.title.substring(0,15)+"..."}</h5>
              <h4>
                <b>$ {item.price}</b>
              </h4>
              <h6>{Math.floor(item.rating.rate) === 5 ? "⭐⭐⭐⭐⭐" : Math.floor(item.rating.rate) === 4 ? "⭐⭐⭐⭐" : Math.floor(item.rating.rate) === 3 ? "⭐⭐⭐" : Math.floor(item.rating.rate) === 2 ? "⭐⭐" : "⭐"}</h6>
              <button  onClick={() => {
                notify()
                addToCart(item,dispatch)
              }} className="addtoCart">Add To Cart</button>
              <ToastContainer autoClose={1500} closeOnClickrtl={false} />
              <Link to={`/productdetails/${item.id}`}>
              <button className="moreDetailsButton" >More Details</button>
              </Link>
            </div>
          );
        })
      ) : (
        <>
          {<Skeleton width={280} height={300} />}
          {<Skeleton width={280} height={300} />}
          {<Skeleton width={280} height={300} />}
          {<Skeleton width={280} height={300} />}
        </>
      )}
    </div>
  );
};

export default memo(Productslist);
