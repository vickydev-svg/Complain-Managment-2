import React from "react";
import Image from "./image/pic1.svg";
import "./home.css";

const Home = () => {
  return (
    <div class="container_home">
      <div class="content_home">
        <div class="content_writing_part">
          <p class="section1__writing_part__para1">
            COMPLAINT MANAGEMENT SYSTEM
          </p>
          <p class="section1__writing_part__para2">
            Complain Management is a platform designed for College Institutions to file
            access and resolve complaints .
          </p>

          <p class="section1__writting_part__para3">
            Student and Admin can manage their history too.
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
