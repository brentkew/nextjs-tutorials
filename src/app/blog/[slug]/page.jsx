import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';


const getSinglePostData = async (slug)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if(!res.ok) {
      throw new Error("Something went wrong...");
  }
  return res.json();
}

const SingleBlogPage = async ({params}) => {
  const { slug } = params;
  const post = await getSinglePostData(slug);
  return (
    <div className={styles.container}>
        
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill alt='' className={styles.img}
          />
        </div>
        
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <Image src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className={styles.avater} alt="" width={50} height={50} />
          
            
            <Suspense fallback={<div>Loading...</div>} >
              <PostUser authorId={post.userId} />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>05.08.2024</span>
            </div>

          </div>

          <div className={styles.content}>
            {post.body}
          </div>

        </div>

    </div>
  )
}

export default SingleBlogPage