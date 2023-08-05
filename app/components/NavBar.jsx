"use client";

import styles from "./NavBar.module.css";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useUser } from "./useUser";

const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800",
});

export default function NavBar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  const router = useRouter();
  async function navigateTo() {
    if (user !== undefined) {
      console.log(user);
      router.push(`/dashboard/${user?.data.userInfo.userType === "1" ? "client" : "consultant"}/${user?.data.userInfo.id}`)
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
            user
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
