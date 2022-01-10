import React, { useState } from "react";
import axios from "axios";
import "./simple_login.css";
const url = "http://localhost:3000/login/student/signin";
const Simple_Login = () => {
  const [login, setlogin] = useState({
	  rollno : "",
	  password : ""
  })
  function handleChange(event)
  {
    const {name , value} = event.target;

      setlogin(prevValue=>
      {
            return ({
          ...prevValue,[name] : value
        })
      })
  }
  async function handleClick(event)
  {
    try {
      event.preventDefault();
        const result = 	await axios.post(url,login);
        localStorage.setItem("mytoken",result.data.token);
        localStorage.setItem("myrollno",result.data.result.rollno);
        window.location.href = '/student';
      setlogin({
        rollno : "",
        password : ""
      });
    } catch (error) {
      alert('Invalid Credintials');
    }
    }
  return (
    <div className="body_simple">
      <div class="container_form_3">
        <form action="#" class="simple_form">
          <h2 class="form-title">LOGIN</h2>
          <input
            class="form-input"
            type="text"
            placeholder="Rollno"
            name="rollno"
            onChange={handleChange}
            required
          />
          <input
            class="form-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <button type="submit" onClick={handleClick}>Login</button>
          <a href="#" class="forgot-password">
            Forget Password?
          </a>
        </form>
      </div>
    </div>
  );
};
export default Simple_Login;
