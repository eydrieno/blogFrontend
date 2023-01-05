import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/adminPanel.module.scss";
import authContext from "../authContext";

function AdminPanel() {
  const navigate = useNavigate();
  const { isAuth } = useContext(authContext);
  useEffect(() => {
    if (isAuth === false) navigate("/adminPanel");
  }, [isAuth]);

  return (
    <div className="Homepage">
      <div className={styles.wrapper}>
        <h1>Admin Panel</h1>
        <Link to={`addPost`}>
          <p className={styles.button}>add post</p>
        </Link>
        <Link to={`editPost`}>
          <p className={styles.button}>edit/remove post</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminPanel;
