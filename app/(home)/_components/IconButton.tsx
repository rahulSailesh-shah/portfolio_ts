import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

interface Props {
    text?: string;
    type?: string;
}

const IconButton = ({ text, type }: Props) => {
    return (
        <div>
            {" "}
            <button className='bg-cyan-500 inline-block px-6 py-2 hover:bg-cyan-700 transition-hover duration-200  rounded-md text-md mr-4 font-medium text-[#111111]'>
                <div className='flex justify-center items-center'>
                    {type == "Github" ? <IoLogoGithub /> : <FiExternalLink />}
                    <span className='ml-2'>{text}</span>
                </div>
            </button>
        </div>
    );
};

export default IconButton;
