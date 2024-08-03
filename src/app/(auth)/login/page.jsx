"use client"

import React from 'react'
import { signIn } from "next-auth/react"
import styles from './login.module.css'
import LoginForm from '@/components/loginForm/loginForm'


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <button className={styles.signInGithub} onClick={() => signIn()}>
          Login with Github
        </button>

        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage



// {session ? (
//   <>
//     <p>Signed in as {session.user.email}</p>
//     <button onClick={() => signOut()}>Sign out</button>
//   </>
// ) : (
//   <>
//     <p>Not signed in</p>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// )}