import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/postsList.module.scss";
import axios from "../axios-setup";
import authContext from "../authContext";

function PostsList() {
  const navigate = useNavigate();
  const { isAuth } = useContext(authContext);

  useEffect(() => {
    if (isAuth === false) navigate("/adminPanel/logged");
    showPosts();
  }, []);
  const [allPosts, setAllPosts] = useState([]);

  const showPosts = async () => {
    try {
      const {
        data: { posts },
      } = await axios.get("/api/v1/posts");
      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Homepage">
      <h1>posts list</h1>
      <p className={styles.info}>choose a post to edit/remove</p>
      <div className={styles.listWrapper}>
        {allPosts.map((post) => {
          const { _id, title } = post;
          return (
            <div>
              <Link to={`${_id}`}>
                <p className={styles.postTitle}>{title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
