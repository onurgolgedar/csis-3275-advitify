import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserProvider } from "./components/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home | Advitify",
    template: "%s | Advitify",
  },
  description: "Advitify",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <NavBar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
