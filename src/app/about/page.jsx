import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'


export const metadata = {
  title: "About Us",
  description: "About us page",
};

const AboutPage = () => {

  // console.log("Lets check CSR and SSR")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <h2 className={styles.title}>About Agency</h2>
        <h1 className={styles.subtitle}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
        </div>

      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="Brands image" fill className={styles.heroImg} />
      </div>


    </div>
  )
}

export default AboutPage