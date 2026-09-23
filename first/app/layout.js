import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SessionWrapper from "@/component/SessionWrapper";
export const metadata = {
  title: "Facebook",
  description: "Connect to world using facebook...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SessionWrapper >

          <div className="container mx-auto min-h-[80vh]"> {children}</div>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}