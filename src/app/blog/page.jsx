import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/utils';
// import { getPosts } from '@/lib/data'

// FETCH DATA WITH API
const getPostData = async()=> {
  const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"})
  if(!res.ok) {
    throw new Error("Something went wrong....");
  }
  return res.json();
}

export const metadata = {
  title: "Blogs Page",
  description: "Blogs page",
};

const BlogPage = async ({params, searchParams}) => {

  // FETCH DATA WITH API
  const posts = await getPostData();

  // FETCH DATA WITHOUT API
  // const posts = await getPosts();
  // console.log("Params", params, "Search Params", searchParams);

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