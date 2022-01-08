import React from "react";
import "./simple_login.css";
const Simple_Login = () => {
  return (
    <div className="body_simple">
      <div class="container_form_3">
        <form action="#" class="simple_form">
          <h2 class="form-title">LOGIN</h2>
          <input
            class="form-input"
            type="text"
            placeholder="User Name"
            required
          />
          <input
            class="form-input"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          <a href="#" class="forgot-password">
            Forget Password?
          </a>
        </form>
      </div>
    </div>
  );
};
export default Simple_Login;
