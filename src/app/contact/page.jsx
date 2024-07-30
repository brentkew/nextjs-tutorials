import React from 'react'
import styles from './contact.module.css';
import Image from 'next/image';


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" atl="Contact Us" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Please enter name" />
            <input type="email" placeholder="Please enter email" />
            <input type="text" placeholder="Please enter (phone)" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Please enter message"></textarea>
            <button>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default ContactPage