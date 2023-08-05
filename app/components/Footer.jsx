import styles from "./Footer.module.css";
import { Abhaya_Libre } from "next/font/google";
import Link from "next/link";

const logoFont = Abhaya_Libre({
  subsets: ["latin"],
  weight: "800",
});

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <footer className={styles.container}>
        <div className={logoFont.className}>
          <span className={styles.logo}>Advitify</span>
        </div>
        <div className={styles.categoryContainer}>
          {navigationCategories.map((category) => {
            return (
              <div key={category.category}>
                <h2>{category.category}</h2>
                <ul className={styles.links}>
                  {category.contents.map((content, index) => {
                    return (
                      <li key={index} className={styles.link}>
                        <Link href={`/${content.path}`}>
                          {content.content}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={styles.copyRight}>
          <span>Copyright &copy; {year} Advitify</span>
        </div>
      </footer>
    </div>
  );
}

const navigationCategories = [
  {
    category: "Categories",
    contents: [
      {
        content: "Software",
        path: "software"
      },
      {
        content: "Cybersecurity",
        path: "cybersecurity"
      },
      {
        content: "Software",
        path: "software"
      },
      {
        content: "Cloud computing",
        path: "cloud-computing"
      },
      {
        content: "Database",
        path: "database"
      },
      {
        content: "Customers",
        path: "customers"
      },
      {
        content: "Automation",
        path: "automation"
      },
      {
        content: "Artificial intelligence",
        path: "artificial-intelligence"
      },
      {
        content: "Computing",
        path: "computing"
      },
      {
        content: "Data visualization",
        path: "data-visualization"
      },
      {
        content: "Embedded systems",
        path: "embedded-systems",
      }
    ],
  },
  {
    category: "About",
    contents: [
      {
        content: "About Advitify",
        path: "about"
      }
    ],
  },
  {
    category: "Guide",
    contents: [
      {
        content: "Pricing",
        path: "pricing"
      },
      {
        content: "Help & Support",
        path: "help-and-support"
      },
      {
        content: "Trust & Safety",
        path: "trust-and-safety"
      },
      {
        content: "Become a consultant",
        path: "signUpConsultant"
      }
    ],
  },
  {
    category: "Others",
    contents: [
      {
        content: "Terms",
        path: "terms"
      },
      {
        content: "Privacy policy",
        path: "privacy-policy"
      },
      {
        content: "Sitemap",
        path: "sitemap"
      },
      {
        content: "Accessibility statement",
        path: "accessibility-statement"
      },
    ]
  },
];