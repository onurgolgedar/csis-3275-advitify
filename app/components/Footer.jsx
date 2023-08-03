import styles from "./Footer.module.css";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";

const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800"
})



const navigationCategories = [{
  category: "Categories",
  contents: ["Software", "Cybersecurity", "Cloud computing", "Database", "Customers", "Automation",
    "Artificial intelligence", "Computing", "Data visualization", "Embedded systems"
  ]
}, {
  category: "About",
  contents: ["About Advitify"]
}, {
  category: "Guide",
  contents: ["Pricing", "Help & Support", "Trust & Safety", "Become a consultant", "Admin"]
}, {
  category: "Others",
  contents: ["Terms", "Privacy policy", "Sitemap", "Accessibility statement"]
}];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <footer className={styles.container}>
        <div className={logoFont.className}>
          <span className={styles.logo}>Advitify</span>
        </div>
        <div className={styles.categoryContainer}>
          {
            navigationCategories.map(category => {
              return (
                <div key={category.category}>
                  <h2>{category.category}</h2>
                  <ul className={styles.links}>
                    {
                      category.contents.map((content, index) => {
                        return (
                          <li key={index} className={styles.link}>
                            <Link href={`/${content.toLocaleLowerCase()}`}>{content}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className={styles.copyRight}>
          <span>Copyright &copy; {year} Advitify</span>
        </div>
      </footer>
    </div>
  )
}