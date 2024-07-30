import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCard = async ({post})=> {
    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Link className={styles.link} href={`/blog/${post.id}`}>
                        <Image src={post.imageUrl} atl="" fill className={styles.img} />
                    </Link>
                </div>
                <div className={styles.date}>1.08.2024</div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>
                    <Link className={styles.link} href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                    </h1>
                <p className={styles.desc}> {post.data} </p>
                <Link className={styles.link} href={`/blog/${post.id}`}>Read More</Link>
            </div>
        </div>
    )

}

export default PostCard;