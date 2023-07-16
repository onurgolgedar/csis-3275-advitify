import styles from "./NavBar.module.css";

export default function NavBar() {
  return(
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <h1>NavBar here</h1>
      </nav>
    </div>
  )
}