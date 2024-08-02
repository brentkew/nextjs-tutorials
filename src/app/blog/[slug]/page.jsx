import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
import { getSinglePost } from '@/lib/utils';
// import { getSinglePost } from '@/lib/data';

// FETCH DATA WITH API
const getSinglePostData = async (slug)=> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if(!res.ok) {
      throw new Error("Something went wrong...");
  }
  console.log("DAA", res);
  return res.json();
}

export const generateMetadata = async ({params}) => {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return {
    title: post.title,
    description: post.data
  }
}


const SingleBlogPage = async ({params}) => {
  const { slug } = params;
  
  // FETCH DATA WITH API
  const post = await getSinglePostData(slug);

  // FETCH DATA WITHOUT API
  // const post = await getSinglePost(slug);

  return (
    <div className={styles.container}>
        
        <div className={styles.imgContainer}>
          <Image src={post.img} fill alt='' className={styles.img} />
        </div>
        
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
            <Suspense fallback={<div>Loading...</div>} >
              <PostUser authorId={post.userId} />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>05.08.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            {post.data}
          </div>

        </div>

    </div>
  )
}

export default SingleBlogPage