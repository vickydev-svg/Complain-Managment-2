import React, { useState } from "react";
import axios from "axios";
import "./admin_login.css";
const url = "http://localhost:3000/login/admin/signin";
const Admin_Login = () => {
  const [login, setlogin] = useState({
	  department : "Choose Department",
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
        //console.log(result);
        localStorage.setItem("mydepartment",result.data.result.department);
        window.location.href = '/admin';
        setlogin({
          department : "Choose Department",
	        password : ""
        })
    } catch (error) {
      window.alert('Invalid Credintials');
    }
    }
  return (
    <div className="body_simple_admin">
      <div class="container_form_4">
        <form action="#" class="simple_form_admin">
          <h2 class="form-title_admin">LOGIN</h2>
          {/* <input
            class="form-input_admin"
            type="text"
            placeholder="Department"
            required
          /> */}
          <select id="depart" name="department" class="form-input_admin" onChange={handleChange}>
                <option value="Choose Department" default>
                  Choose Department
                </option>
                <option value="Sport">
                  Sport
                </option>
                <option value="Meal">Meal</option>
                <option value="Academic">Academic</option>
                <option value="Library">Library</option>
                <option value="Injury">Injury</option>
          </select>
          <input
            class="form-input_admin"
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
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

export default Admin_Login;
