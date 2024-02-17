import React from "react";

interface Props {
    text?: string;
    to?: string;
}

const Button = ({ text, to }: Props) => {
    return (
        <a
            href={`#${to}`}
            className='cursor-pointer bg-[#6E92F3] inline-block px-10 py-3 hover:bg-[rgb(84,114,194)] transition-hover duration-200  rounded-md text-lg font-medium text-[#111111]'
        >
            {text}
        </a>
    );
};

export default Button;
