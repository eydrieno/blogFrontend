import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const dropdown = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)}>
      <Link to="/" onClick={closeMenu}>
        home
      </Link>
      <Link to="/allPosts" onClick={closeMenu}>
        all posts
      </Link>
      <Link to="/allPosts/tips" onClick={closeMenu}>
        travel tips
      </Link>
      <button class="dropbtn" onClick={dropdown}>
        destinations
        <FontAwesomeIcon
          icon="fa-solid fa-caret-down"
          style={{ paddingLeft: "10px" }}
        />
      </button>
      {dropOpen && (
        <>
          <Link
            to="/allPosts/mexico"
            onClick={() => {
              closeMenu();
              dropdown();
            }}
            className="bm-item dropdown-link"
          >
            Mexico
          </Link>
          <br></br>
          <Link
            to="/allPosts/iceland"
            onClick={() => {
              closeMenu();
              dropdown();
            }}
            className="bm-item dropdown-link"
          >
            Iceland
          </Link>
          <br></br>
          <Link
            to="/allPosts/poland"
            onClick={() => {
              closeMenu();
              dropdown();
            }}
            className="bm-item dropdown-link"
          >
            Poland
          </Link>
        </>
      )}
      <Link to="/contact" onClick={closeMenu}>
        contact
      </Link>
    </Menu>
  );
};
