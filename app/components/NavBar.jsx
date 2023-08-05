"use client";

import styles from "./NavBar.module.css";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useUser } from "./useUser";
import { useEffect, useState } from "react";

const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800",
});

export default function NavBar() {
  const context = useUser();
  const [user, setUser] = useState({ user: null });
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) setUser(JSON.parse(session));
    else setUser(null);
  }, [])

  const router = useRouter();
  async function navigateTo() {
    if (user !== undefined) {
      router.push(`/dashboard/${user?.data.userInfo.userType === "2" ? "client" : "consultant"}/${user?.data.userInfo.id}`)
      return;
    }
  }
  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={logoFont.className}>
          <span className={styles.link}>
            <Link href="/" className={styles.logo}>
              Advitify
            </Link>
          </span>
        </div>
        <ul className={styles.links}>
          {
            context.user
              ?
              <></>
              :
              <>
                <li className={styles.link}>
                  <Link href="/signIn">Sign in</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/signUpMember">Sign up</Link>
                </li>
              </>


          }
          <li className={styles.link}>
            <button className={styles.btn} onClick={() => navigateTo()}>
              <Image
                src="/guest_icon.png"
                alt="guest icon"
                width={32}
                height={34}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
