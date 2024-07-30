import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>tech9bees</div>
      <div className={styles.text}>
        Tech9bees creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer