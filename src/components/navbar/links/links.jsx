"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from '../navlink/navlink';
import Image from 'next/image';

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
];



const Links = () => {

  const isAdmin = true;
  const session = true;
  
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map( (link)=> (
            <NavLink item={link} key={link.title} />
        ) )}

        {session ? (
          <>
            {isAdmin && (
              <NavLink item={ {item: "Admin", path: "/admin"} } />
            )}

            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={ {item: "Login", path: "/login"} } />
        )}
      </div>


      {/* <button className={styles.menuButton} onClick={ ()=> setOpen( (prev)=> !prev ) } >Menu</button>   */}

      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick= {()=> setOpen( (prev)=> !prev )} />

      {open && 
        <div className={styles.mobileLinks}>
          {links.map( (link)=> (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      }

    </div>
  )
}

export default Links