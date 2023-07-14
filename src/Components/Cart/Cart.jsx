import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch()
  const ref = useRef([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const { inCart } = useSelector((state) => {
    return state;
  });

  function deleteItem(id,dispatch,inCart){
    const ans = inCart.filter((item) => {
      return item.id !== id
    })
    dispatch({
      type:"add-to-cart1",
      data:ans
    })
    console.log(ans);
  }


  return (
    <div className="cartDiv">
      {inCart
        ? inCart.map((item) => {
            return (
              <div className="finalItemContainer">
                <div className="leftContainer1">
                  <img src={item.image} alt="" />
                </div>
                <div className="rightContainer1">
                  <h3>{item.title}</h3>
                  <div className="countContainer">
                    <div onClick={() => {
                      ref.current[item.id - 1]++
                      setState(!state)
                    }} className="plus">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div onClick={() => {
                      ref.current[item.id - 1]--
                      if(ref.current[item.id - 1] === 0){
                        deleteItem(item.id,dispatch,inCart)
                      }
                      setState(!state)
                    }} className="plus">
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>

                    <h3>{`${ref.current[item.id - 1]} x ${item.price} = $ ${(ref.current[item.id - 1] * item.price).toFixed(2)}`}</h3>
                  <div onClick={() => {
                    deleteItem(item.id,dispatch,inCart)
                  }} className="absolute">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Cart;
