import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "../axios-setup";
import styles from "../styles/editPost.module.scss";
import { useNavigate } from "react-router-dom";
import authContext from "../authContext";

function EditPost({ allPosts }) {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(authContext);
  useEffect(() => {
    if (isAuth === false) navigate("/adminPanel");
  }, [isAuth]);

  const postID = useParams().id;
  const chosenPost = allPosts.find((item) => item._id === postID);
  const [post, setPost] = useState({
    title: chosenPost.title,
    content: chosenPost.content,
  });
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  }

  function handleEdit(event) {
    event.preventDefault();
    edit(postID, post);
  }

  function handleDelete(event) {
    event.preventDefault();
    deletePost(postID);
  }

  const edit = async (postID, post) => {
    try {
      await axios.patch(`/api/v1/posts/${postID}`, {
        title: post.title,
        content: post.content,
      });
      setIsEdited(true);
      if (error === true) setError(false);
    } catch (error) {
      console.log(error);
      console.log(post);
      console.log(postID);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/v1/posts/${id}`);
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="Homepage">
      {isDeleted ? (
        <div className={styles.deletedInfo}>
          <h4>Post successfully deleted!</h4>
          <button
            className={styles.editButton}
            style={{ width: "200px" }}
            onClick={() => navigate(-1)}
          >
            back to posts list
          </button>
        </div>
      ) : (
        <form className={styles.editForm}>
          <label>title</label>
          <input
            name="title"
            placeholder="title"
            value={post.title}
            onChange={handleChange}
          />
          <label>content</label>
          <textarea
            rows="30"
            name="content"
            placeholder="content"
            value={post.content}
            onChange={handleChange}
          />
          <div className={styles.buttonsWrapper}>
            <button className={styles.editButton} onClick={handleEdit}>
              Edit
            </button>
            <button className={styles.deleteButton} onClick={handleDelete}>
              Delete
            </button>
            <div style={{ color: "green", marginTop: "15px" }}>
              {isEdited ? "Post successfully edited!" : null}
            </div>
            <div style={{ color: "red" }}>
              {error ? "Oh no! Something went wrong. Please try later." : null}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditPost;
