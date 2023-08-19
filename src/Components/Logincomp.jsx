import React from "react";
import "./Logincomp.css";
import { Link } from "react-router-dom";

const Logincomp = () => {
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
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i class="fa-solid fa-lock"></i>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <button>Submit</button>
            <div className="register-link">
              <p>
                Don't have an account? <Link>Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Logincomp;
