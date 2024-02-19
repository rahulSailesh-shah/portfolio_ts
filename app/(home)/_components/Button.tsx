import React from "react";

interface Props {
    text?: string;
    to?: string;
}

const Button = ({ text, to }: Props) => {
    return (
        <a
            href={`#${to}`}
            className='cursor-pointer bg-cyan-500 inline-block px-10 py-3 hover:bg-cyan-700 transition-hover duration-200  rounded-md text-lg font-medium text-[#111111]'
        >
            {text}
        </a>
    );
};

export default Button;
