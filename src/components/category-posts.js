import React from "react";
import Post from "./post";
import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

function CategoryPosts({ allPosts }) {
  const location = useLocation().pathname;
  const category = useParams().category;
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    categoryChange(category);
  }, [location]);

  const categoryChange = () => {
    setCategoryPosts(allPosts.filter((item) => item.category === category));
  };

  return (
    <div className="Homepage">
      <h1>{category}</h1>
      <div className="posts-container">
        {categoryPosts.map((post) => {
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
    </div>
  );
}

export default CategoryPosts;
