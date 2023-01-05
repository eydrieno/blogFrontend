import React from "react";
import { useParams } from "react-router";
import styles from "../styles/single-post.module.scss";
import image from "../images/people-gc1b133f09_1920.jpg";

function SinglePost({ allPosts }) {
  const id = useParams().id;
  console.log(id);
  console.log(allPosts);
  const post = allPosts.find((item) => item._id === id);
  console.log(post);
  return (
    <div className={styles.wrapper}>
      <h1>{post.title}</h1>
      <h5>created: {post.date.slice(0, 10)}</h5>
      <h5>by John Smith</h5>
      <img src={image} className={styles.postImage} />
      <p>{post.content}</p>
    </div>
  );
}

export default SinglePost;
