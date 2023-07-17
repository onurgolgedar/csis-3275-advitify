"use client"

import styles from "./NavBar.module.css";
import { useState } from "react";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";
import Image from "next/image";


const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800"
})

export default function NavBar() {
  const [input, setInput] = useState("")
  return(
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={logoFont.className}>
          <span className={styles.logo}>Advitify</span>
        </div>
        <div className={styles.searchBar}>
          <input className={styles.searchInput} value={input} onChange={e => setInput(e.value)} placeholder="Search for anything"/>
          <Image className={styles.searchIcon} src="/search_icon.png" alt="search icon" width={18} height={18}></Image>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="#">Sign in</Link>
          </li>
          <li className={styles.link}>
            <Link href="#">Sign up</Link>
          </li>
          <li className={styles.link}>
            <Link href="#">
              <Image src="/guest_icon.png" alt="guest icon" width={32} height={34} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}