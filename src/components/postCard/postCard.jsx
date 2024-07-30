import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCard = async ({post})=> {
    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" atl="" fill className={styles.img} />
                </div>
                <div className={styles.date}>1.08.2024</div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}> {post.body} </p>
                <Link className={styles.link} href={`/blog/${post.id}`}>Read More</Link>
            </div>
        </div>
    )

}

export default PostCard;