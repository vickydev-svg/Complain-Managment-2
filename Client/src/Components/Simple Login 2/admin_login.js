import React from "react";
import "./admin_login.css";
const Admin_Login = () => {
  return (
    <div className="body_simple_admin">
      <div class="container_form_4">
        <form action="#" class="simple_form_admin">
          <h2 class="form-title_admin">LOGIN</h2>
          <input
            class="form-input_admin"
            type="text"
            placeholder="Department"
            required
          />
          <input
            class="form-input_admin"
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

export default Admin_Login;
