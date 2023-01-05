import React from "react";
import image from "../images/people-gc1b133f09_1920.jpg";
import styles from "../styles/post.module.scss";

function Post(props) {
  return (
    <div className="Post">
      <div className={styles.container}>
        <img src={image} className={styles.postImage} alt="beautiful photo" />
        <h2>{props.title}</h2>
        {/* <p>{props.content.slice(0, 150)}...</p> */}
      </div>
    </div>
  );
}

export default Post;
