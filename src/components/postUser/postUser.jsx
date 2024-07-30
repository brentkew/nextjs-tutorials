import React from "react";
import styles from "./postUser.module.css";

const getAuthorData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache: "no-store",});
  
  if (!res.ok) {
    throw new Error("Something went wrong...");
  }
  return res.json();
};

const PostUser = async ({ authorId }) => {
  const author = await getAuthorData(authorId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{author.name}</span>
    </div>
  );
};

export default PostUser;
