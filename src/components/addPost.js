import React, { useContext, useEffect } from "react";
import axios from "../axios-setup";
import CreatePost from "./new-post-form";
import styles from "../styles/contactForm.module.scss";
import { useNavigate } from "react-router-dom";
import authContext from "../authContext";

function AddPost() {
  const navigate = useNavigate();
  const { isAuth } = useContext(authContext);
  useEffect(() => {
    if (isAuth === false) navigate("/adminPanel");
  }, [isAuth]);
  const addPost = async (post) => {
    try {
      await axios.post("/api/v1/posts", {
        title: post.title,
        content: post.content,
        category: post.category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Homepage">
      <div className={styles.formContainer}>
        <h1>post add form</h1>
        <CreatePost onAdd={addPost}></CreatePost>
      </div>
    </div>
  );
}

export default AddPost;
