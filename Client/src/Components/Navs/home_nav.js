import React from "react";
import "./home_nav.css";
const Home_Nav = () => {
  return (
    <nav class="navbar_home">
      <div class="list-item_home home">
        <a href="" class="list-links_home">
          Home
        </a>
        <a href="" class="list-links_home">
          About Us
        </a>
        <a href="" class="list-links_home">
          Info
        </a>
        <a href="/student/login" class="list-links_home">
            StudentLogin
        </a>
        <a href="/admin/login" class="list-links_home">
            AdminLogin
        </a>
      </div>
    </nav>
  );
};

export default Home_Nav;
