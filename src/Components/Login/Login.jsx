import React, { memo, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () => toast("Welcome to e-Mart");
  const [userdata, setUserdata] = useState("");

  function validateUser(email, password) {
    console.log(userdata);
    if (email === "" || password === "") {
      alert("Invalid Details");
      return;
    }
    if (userdata === null) {
      alert("Please Register First !!");
      navigate("/register");
      return;
    } else if (
      userdata !== "" &&
      email === userdata.email &&
      password === userdata.password
    ) {
      notify();
      localStorage.setItem("isLogin", JSON.stringify(true));
      setLogin(true);
      navigate("/");
    }
  }

  // const notify = () => toast("Item added to cart");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user-data"));
    setUserdata(data);
  }, []);

  return (
    <div className="login_box_container">
      <section>
        <div className="login-box">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i class="fa-solid fa-lock"></i>
              </span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                required
              />
              <label>Password</label>
            </div>

            <button
              onClick={() => {
                validateUser(email, password);
              }}
            >
              Submit
            </button>
            <ToastContainer autoClose={1000} position="top-center" />
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default memo(Login);
