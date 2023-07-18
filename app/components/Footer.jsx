import styles from "./Footer.module.css";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";

const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800"
})

const navigationCategories = [{
  category: "Categories",
  contents: [
    "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity",
    "Personal Development", "Design", "Marketing", "Lifestyle", "Photography & Video", "Health&Fitness",
    "Music", "Teaching & Academic"
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
                            <Link href={`/${content}`}>{content}</Link>
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
      </footer>
    </div>
  )
}