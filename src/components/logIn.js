import React, { useState, useContext, useEffect } from "react";
import axios from "../axios-setup";
import { useNavigate } from "react-router-dom";
import authContext from "../authContext";
import styles from "../styles/contactForm.module.scss";

export default function LogIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const { isAuth, setIsAuth } = useContext(authContext);
  var isLogged = (localStorage.getItem("isLogged") === 'true')
  setIsAuth(isLogged);
  useEffect(() => {
    if (isAuth) navigate("/adminPanel/logged");
  }, [isAuth]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const signIn = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { user },
      } = await axios.post("/api/v1/users", {
        userName: credentials.userName,
        password: credentials.password,
      });
      if (user) {
        setIsAuth(true);
        localStorage.setItem("isLogged", "true")
        navigate("/adminPanel/logged");
      } else {
        navigate("/");
      }
      // setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Log in to admin panel</h1>
      <div className={styles.formContainer}>
        <form>
          <input
            type="text"
            placeholder="username"
            name="userName"
            autoComplete="off"
            onChange={handleChange}
            value={credentials.userName}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
          <button className={styles.sendButton} onClick={signIn}>
            Log in
          </button>
        </form>
      </div>
      {/* {user} */}
    </div>
  );
}
