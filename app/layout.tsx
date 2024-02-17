"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Rahul Shah | Full Stack Developer",
//   description: "Rahul Shah Portfolio website built with Next.js and Tailwind",
// };

export default function RootLayout({ children }) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        if (document.readyState !== "complete") {
            const handler = () => {
                setTimeout(() => {
                    console.log("load");
                    setShowSplash(false);
                }, 1000);
            };
            window.addEventListener("load", handler);

            return () => {
                window.removeEventListener("load", handler);
            };
        } else {
            const timeout = window.setTimeout(() => {
                console.log("timeout");
                setShowSplash(false);
            }, 0);
            return () => window.clearTimeout(timeout);
        }
    }, []);

    return (
        <html lang='en' className='!scroll-smooth'>
            <head>
                <title>Rahul Shah | Full Stack Developer </title>
            </head>
            <body className='w-full'>
                {showSplash ? (
                    <div className='flex bg-red-600 justify-center items-center w-screen h-screen'></div>
                ) : (
                    <>{children}</>
                )}
            </body>
        </html>
    );
}
