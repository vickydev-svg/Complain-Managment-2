import React from "react";
import "./home_nav.css";
const NavAdmin = () => {
  const name = localStorage.getItem("mydepartment") + "  Admin";
  function handleClick()
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
          <a href="/admin" class="list-links_home">
            Home
          </a>
          <a href="/admin/history" class="list-links_home">
            History
          </a>
          <a href="/admin/complains" class="list-links_home">
            New Complains
          </a>
          <button href="" class="list-links_home" onClick={handleClick}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavAdmin;
