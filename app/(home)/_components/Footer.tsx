import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <div className='text-white w-full flex flex-col md:flex-row items-center justify-between py-4 md:px-28'>
            <div>
                <span className='text-[#cdcdcd]'> © 2024 Rahul Shah </span> .
                Crafted by yours truly
            </div>
            <SocialLinks />
        </div>
    );
};

export default Footer;
