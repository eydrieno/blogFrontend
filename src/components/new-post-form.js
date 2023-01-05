import React, { useState } from "react";
import styles from "../styles/contactForm.module.scss";
import axios from "../axios-setup";

function CreatePost(props) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  }

  const addPost = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/v1/posts", {
        title: post.title,
        content: post.content,
        category: post.category,
      });
      setSubmitted(true);
      if (error === true) setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setPost({
      title: "",
      content: "",
      category: "",
    });
  };

  return (
    <div>
      <form>
        <label>title</label>
        <input
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
        <label>content</label>
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        />
        <label>category (lowercase)</label>
        <input
          name="category"
          value={post.category}
          onChange={handleChange}
          required
        />
        <button className={styles.sendButton} onClick={addPost}>
          Add post
        </button>
        <div className={styles.sentMessage}>
          {submitted ? "Post successfully added!" : null}
        </div>
        <div className={styles.errorMessage}>
          {error ? "Oh no! Something went wrong. Please try later." : null}
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
