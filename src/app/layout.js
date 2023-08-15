import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sportzal",
  description: "Start your healthy journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>
          <section>
            {children}
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
