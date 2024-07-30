"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const NavigationTest = () => {

  // Client side navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const userName = searchParams.get('username');


  const handleClick = () => {
    console.log("Click and Redirect.....");
    console.log("Url Path: ", pathname)
    console.log("Search Params: ", userName)
    router.push("/")
  }

  return (
    <div>
      <h1>Navigation Test...</h1>

      <Link href="/">Home</Link>

      <button onClick={handleClick}>Click & Redirect</button>
    </div>
  )
}

export default NavigationTest