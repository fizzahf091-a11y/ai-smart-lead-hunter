
import Navbar from "./component/common/navbar";
import Footer from "./component/common/footer";
import "./globals.css";
import React, { Children } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:["latin"], variable:"--font-space",});
const inter = Inter({ subsets: ["latin"], variable:"--font-inter--",});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return(
    <html lang="en">
    <body className={`${inter.variable}${spaceGrotesk.variable} font-sans bg-[#020617]  text-white min-h-screen flex flex-col`}>
    <Navbar />{/* Showing on all pages */}
    <main className="flex-grow">
    {children}</main>{/* Home Pages will shown here */}
   <Footer />
    </body>
    </html>
  );
}