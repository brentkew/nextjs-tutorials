"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { websiteLogin } from '@/lib/actions'
import styles from './login.module.css'


const githubLogin = ()=> {

}

const LoginPage = async () => {
  const { data: session } = useSession()
  return (
    <div>
        

        <div className={styles.container}>
          <div className={styles.wrapper}>

            <button className={styles.signInGithub} onClick={() => signIn()}>
            Login with Github
            </button>

            <form className={styles.form} action={websiteLogin}>
              <input type="text" placeholder='Enter username' name="username" />
              <input type="password" placeholder="Enter password" name="password" />
              <button>Login with Cretentials</button>
            </form>
          </div>
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