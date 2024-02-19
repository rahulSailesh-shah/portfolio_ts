"use client";
import React from "react";
import { FloatingNav } from "../(home)/_components/floating-navbar";
import Navbar from "./_components/mobile-navbar";

interface Props {
    children?: React.ReactNode;
}

const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

const HomeLayout = ({ children }: Props) => {
    return (
        <div className='relative  w-full'>
            <FloatingNav navItems={navItems} className='md:flex hidden' />
            <Navbar />
            <div>{children}</div>
        </div>
    );
};

export default HomeLayout;
