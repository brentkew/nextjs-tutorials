import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import SessionWrapper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blog website",
    template: "%s | Nextjs 14 App"
  },
  description: "My blog webiste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="container">

          <SessionWrapper>
              <Navbar />
            {children}
            <Footer />
          </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
