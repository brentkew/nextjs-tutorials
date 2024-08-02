"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "../navlink/navlink";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

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
  const isAdmin = false;
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && (
              <NavLink
                className={styles.admin}
                item={{ item: "Admin", path: "/admin" }}
              />
            )}

            <button onClick={() => signOut()} className={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <button className={styles.logout} onClick={() => signIn()}>
            Signin
          </button>
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
