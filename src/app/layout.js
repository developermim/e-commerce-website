import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ClientProviders from "./ClientProviders"; // Adjust the import path accordingly
import Navbar from "@/components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          <Navbar/>
          <main className="min-h-[calc(100vh-100px)]">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
