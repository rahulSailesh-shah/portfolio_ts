"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
    children?: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <head>
                <title>Rahul Shah | Full Stack Developer </title>
            </head>
            <body className='w-full'>{children}</body>
        </html>
    );
}
