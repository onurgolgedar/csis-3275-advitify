import styles from "./Admin.module.css";
import Link from "next/link";
import Image from "next/image";
import AdminMain from "./components/AdminMain";
import AdminClients from "./components/AdminClients";

export default async function Admin(param) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sideMenu}>
          {/* side menu */}
          <div className={styles.title}>
            <h2>ADMIN</h2>
            <span className={styles.line}></span>
          </div>
          <h2>MENU</h2>
          <span className={styles.line}></span>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} href="/admin">
                <Image
                  src="/home_icon.png"
                  alt="Home icon"
                  width={32}
                  height={32}
                />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/admin/clients">
                <Image
                  src="/people_icon.png"
                  alt="Home icon"
                  width={32}
                  height={32}
                ></Image>
                <span>Clients/Consultants</span>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                <Image
                  src="/sign_out_icon.png"
                  alt="Home icon"
                  width={32}
                  height={26}
                ></Image>
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
          <span className={styles.line}></span>
        </div>
        <div className={styles.dashboard}>
          <h1>DASHBOARD</h1>
          {param.params === undefined ? (
            <AdminMain />
          ) : (
            <AdminClients param={param} />
          )}
        </div>
      </div>
    </main>
  );
}
