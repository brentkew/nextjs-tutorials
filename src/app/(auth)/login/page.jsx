"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const LoginPage = async () => {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn("github")}>Sign in</button>
        </>
      )}
    </div>
  )
}

export default LoginPage