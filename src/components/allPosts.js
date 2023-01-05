import React from "react";
import Post from "./post";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./pagination";

function AllPosts({ allPosts }) {
  console.log(allPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => setCurrentPage(number);

  return (
    <div className="Homepage">
      <h1>All posts</h1>
      <div className="posts-container">
        {currentPosts.map((post) => {
          const { title, content, _id, date, category } = post;
          return (
            <Link to={`${category}/${_id}`}>
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
      <Pagination
        postsPerPage={postsPerPage}
        allPosts={allPosts}
        paginate={paginate}
      />
    </div>
  );
}

export default AllPosts;
