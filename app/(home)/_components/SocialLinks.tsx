import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";

const SocialLinks = () => {
    return (
        <div className='flex justify-center items-center py-8'>
            <div className='mx-4'>
                <a
                    className='text-xl text-[#cdcdcd] hover:text-cyan-500 transition-hover duration-300'
                    href='https://www.linkedin.com/in/rahul-shah17'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedinIn />
                </a>
            </div>

            <div className='mx-4'>
                <a
                    className=' text-x text-[#cdcdcd] hover:text-cyan-500 transition-hover duration-300'
                    href='https://github.com/rahulSailesh-shah/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithubAlt />
                </a>
            </div>

            <div className='mx-4'>
                <a
                    className='text-xl text-[#cdcdcd] hover:text-cyan-500 transition-hover duration-300'
                    href='https://www.instagram.com/rahul.shah_03/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaInstagram />
                </a>
            </div>

            <div className='mx-4'>
                <a
                    className='text-xl text-[#cdcdcd] hover:text-cyan-500 transition-hover duration-300'
                    href='mailto: rshah107@asu.edu'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsEnvelopeAt />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
