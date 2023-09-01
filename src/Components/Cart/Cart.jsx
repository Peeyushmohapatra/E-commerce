import React, { memo, useRef, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Empty from "../../Images/Emptycart.png"

const Cart = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const ref = useRef([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const { inCart } = useSelector((state) => {
    return state;
  });

  function deleteItem(id, dispatch, inCart) {
    const ans = inCart.filter((item) => {
      return item.id !== id;
    });
    dispatch({
      type: "add-to-cart1",
      data: ans,
    });
  }

  return (
    <div className="cartDiv">
      {inCart.length !== 0
        ? 
        <>
       { inCart.map((item) => {
            return (
              <div key={item.id} className="finalItemContainer">
                <div className="leftContainer1">
                  <img src={item.image} alt="" />
                </div>
                <div className="rightContainer1">
                  <h3>{item.title}</h3>
                  <div className="countContainer">
                    <div
                      onClick={() => {
                        ref.current[item.id - 1]++;
                        setState(!state);
                      }}
                      className="plus"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div
                      onClick={() => {
                        ref.current[item.id - 1]--;
                        if (ref.current[item.id - 1] === 0) {
                          deleteItem(item.id, dispatch, inCart);
                        }
                        setState(!state);
                      }}
                      className="plus"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>

                  <h3>{`${ref.current[item.id - 1]} x ${(item.price * 82.72).toFixed(2)} = ₹ ${(
                    ref.current[item.id - 1] * (item.price * 82.72).toFixed(2)
                  ).toFixed(2)}`}</h3>
                  <div
                    onClick={() => {
                      deleteItem(item.id, dispatch, inCart);
                    }}
                    className="absolute"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
            );
          })}
<div className="button_container">
        <Button
          onClick={() => {
            dispatch({
              type: "item_counts",
              data: ref.current,
            });
            navigate("/payment")
          }}
          variant="outline-secondary"
        >
          Proceed To Checkout
        </Button>
      </div>
        </>
        : <div className="empty_cart_container">
          <img src={Empty} alt="" />
          <h1>Your cart is empty!</h1>
          </div>}

      
    </div>
  );
};

export default memo(Cart);
