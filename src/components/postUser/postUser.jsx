import React from "react";
import styles from "./postUser.module.css";
// import { getSingleUser } from "@/lib/data";
import Image from "next/image";
import { getSingleUser } from "@/lib/utils";

// FETCH DATA WITH API
// const getAuthorData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache: "no-store",});
//   if (!res.ok) {
//     throw new Error("Something went wrong...");
//   }
//   return res.json();
// };

const PostUser = async ({ authorId }) => {

  // FETCH DATA WITH API
  // const author = await getAuthorData(authorId);

  // FETCH DATA WITHOUT API
  const author = await getSingleUser(authorId);


  return (
    <>
      <Image src={author.profileImage ? author?.profileImage : "/noavatar.png"} className={styles.avater} alt="" width={50} height={50} />
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{author?.username}</span>
      </div>
    </>
  );
};

export default PostUser;
