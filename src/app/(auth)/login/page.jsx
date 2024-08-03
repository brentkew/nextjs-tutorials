"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from './login.module.css'
import Link from 'next/link'


const websiteLogin = async(formData)=> {
  const { username, password } = Object.fromEntries(formData);
  try {
    const user = await signIn("credentials", { username, password })
    console.log("user", user);

  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }

  return;
}

const LoginPage = async () => {
  const { data: session } = useSession()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <button className={styles.signInGithub} onClick={() => signIn()}>
          Login with Github
        </button>

        <form className={styles.form} action={websiteLogin}>
          <input type="text" placeholder='Enter username' name="username" />
          <input type="password" placeholder="Enter password" name="password" />
          <button>Login with Cretentials</button>

          <p className={styles.footer}>
            <br /><br />
            {"Don't have an account "}<b><Link href="/register">Register</Link></b>
          </p>
        </form>
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