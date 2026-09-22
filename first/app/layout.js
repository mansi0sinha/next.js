import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export const metadata = {
  title: "Facebook",
  description: "Connect to world using facebook...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="container mx-auto min-h-[80vh]"> {children}</div>
       
        <Footer />
      </body>
    </html>
  );
}