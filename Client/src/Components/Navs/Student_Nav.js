import React from "react";
import "./home_nav.css";
const Nav = () => {
  const name = localStorage.getItem("myrollno");
  function handeClick()
  {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <>
      <nav class="navbar_home">
        <div className="Hello">
            <a href="" class="list-links_home" data-content="Home">
              Hello
          </a>
          <a href="" class="list-links_home name" data-content="Home">
              {name}
          </a>
        </div>
        <div class="list-item_home">
          <a href="/student" class="list-links_home">
            Home
          </a>
          <a href="/student/complains" class="list-links_home" data-content="Complaints">
          Complaints
          </a>
          <a href="/student/history" class="list-links_home">
            History
          </a>
          <a href="/student/newcomplain" class="list-links_home ">
            New Complain
          </a>
          <button href="" class="list-links_home" onClick={handeClick}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
