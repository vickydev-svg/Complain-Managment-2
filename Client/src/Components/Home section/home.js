import React from "react";
import Home_Nav from "./home_nav";
import Image from "./image/pic1.svg";
import "./home.css";

const Home = () => {
  return (
    <div class="container_home">
      <Home_Nav />
      <div class="content_home">
        <div class="content_writing_part">
          <p class="section1__writing_part__para1">
            COMPLAINT MANAGEMENT SYSTEM
          </p>
          <p class="section1__writing_part__para2">
            Complain Management is a platform designed to file ,<br />
            assess and resolve complaints and easy bussiness .The
            <br />
            Process is very Simple , Open the site ,login with institute
            <br />
            mail and file a complaint :)
          </p>

          <p class="section1__writting_part__para3">
            You can discuss the complaint ,get it resolved and even rate the
            response too :)
          </p>
          <div class="sign_in_button_home">
            <button class="sign_in_home">
              <i class="fab fa-google-plus-g"></i>Sign in with google
            </button>
          </div>
        </div>

        <div class="img_part">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
