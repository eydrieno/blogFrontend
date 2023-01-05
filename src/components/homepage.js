import React from "react";
import Post from "./post";
import { Link } from "react-router-dom";

function Homepage({ allPosts }) {
  const latestPosts = allPosts.reverse().slice(0, 6);
  return (
    <div className="Homepage">
      <div className="bg-image">
        <h2 className="intro">
          Don’t call it a dream, call it a plan<span>.</span>
        </h2>
      </div>
      <h1>Latest posts</h1>
      <div className="posts-container">
        {latestPosts.map((post) => {
          const { title, content, _id, date } = post;
          return (
            <Link to={_id}>
              <Post
                key={_id}
                id={_id}
                date={date}
                title={title}
                content={content}
              />
            </Link>
          );
        })}
      </div>
      <div className="about">
        <h1>Who we are</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
