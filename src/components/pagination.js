import React from "react";
import styles from "../styles/pagination.module.scss";

export const Pagination = ({ postsPerPage, allPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(allPosts.length);

  return (
    <div>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
