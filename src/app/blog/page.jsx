import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

// FETCH DATA WITH API
// const getPostData = async()=> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"})
//   if(!res.ok) {
//     throw new Error("Something went wrong....");
//   }

//   return res.json();
// }


const BlogPage = async ({params, searchParams}) => {

  // FETCH DATA WITH API
  // const posts = await getPostData();

  // FETCH DATA WITHOUT API
  const posts = await getPosts();
  console.log("Params", params, "Search Params", searchParams);

  return (
    <div className={styles.container}>

      {posts.map( (post)=> (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      

    </div>
  )
}

export default BlogPage