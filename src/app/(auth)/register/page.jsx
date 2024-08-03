import { registerUser } from '@/lib/actions'
import React from 'react'
import styles from './register.module.css'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={registerUser}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="passwordAgain" placeholder="Enter password again" />
          {/* <input type="password" name="passwordAgain" placeholder="Enter password again" /> */}
          <button>Register</button>
          <p>Already have an account <Link href='/login'>Signin</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage