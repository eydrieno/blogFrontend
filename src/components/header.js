import React, { useContext } from "react";
import SideBar from "./burger-menu";
import "../styles/burger-menu.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authContext from "../authContext";

function Header() {
  const navigate = useNavigate();
  const {isAuth, setIsAuth} = useContext(authContext)
  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem("isLogged", "false")
    setIsAuth(false);
    navigate("/");
  }
  return (
    <div className="Header">
      <SideBar pageWrapId={"page-wrap"} />
      <div id="page-wrap">
        <navbar>
          <h1 className="logo">TravelSquad</h1>
          <div class="navbar">
            <Link to="/">home</Link>
            <Link to="/allPosts">all posts</Link>
            <Link to="/allPosts/tips">travel tips</Link>
            <div class="dropdown">
              <button class="dropbtn">
                destinations
                <FontAwesomeIcon
                  icon="fa-solid fa-caret-down"
                  style={{ paddingLeft: "10px" }}
                />
              </button>
              <div class="dropdown-content">
                <Link to="/allPosts/mexico">Mexico</Link>
                <Link to="/allPosts/iceland">Iceland</Link>
                <Link to="/allPosts/poland">Poland</Link>
              </div>
            </div>
            <Link to="/contact">contact</Link>
          </div>
          
          {isAuth ? 
            <div className="panel-nav">
              <Link to="/adminPanel">panel</Link>
              <button onClick={logOut}>
                log out
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{paddingLeft: "10px"}} />
              </button>
            </div>
            : <span style={{display: "none"}}></span>}
          
        </navbar>
        <hr></hr>
      </div>
    </div>
  );
}

export default Header;
