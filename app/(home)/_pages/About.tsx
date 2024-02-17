"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Button from "../_components/Button";
import { useScroll, motion } from "framer-motion";

const About = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.9 1"],
    });

    return (
        <motion.div
            id='about'
            ref={ref}
            style={{
                opacity: scrollYProgress,
            }}
            className='text-white lg:mt-20 flex lg:flex-row flex-col lg:ml-32 justify-around lg:px-20 px-6'
        >
            <div className='lg:hidden mb-8 ml-2'></div>
            <div className='text-[#cdcdcd] lg:w-2/5 '>
                <h1 className='text-4xl font-semibold mb-10 text-white'>
                    Hi There
                </h1>
                <p className='text-[#cdcdcd] lg:text-xl lg:leading-8 lg:mb-10 mb-4'>
                    I'm Rahul Shah, currently pursuing a Master’s in Computer
                    Science at Arizona State University. My coding journey
                    started unexpectedly in college, taking a web development
                    elective. Now, as a software engineer, I've worked on
                    diverse tech projects, focusing on improving user
                    experiences.
                </p>
                <p className='text-[#cdcdcd] lg:text-xl lg:leading-8 lg:mb-10 mb-4'>
                    Outside of coding, you'll find me hiking, playing table
                    tennis, or brainstorming over coffee. I'm eager to
                    contribute my skills to projects that break norms and push
                    boundaries. Let's create something awesome together.
                </p>

                <div className='mt-10'>
                    <Button text='Send me a message' to='contact' />
                </div>
            </div>

            <div className='lg:w-2/5 mt-12 lg:mt-36'>
                <div className='lg:block hidden'></div>

                <div className=' h-[40rem] bg-[rgb(126,126,126)] relative overflow-hidden rounded-md'>
                    <Image
                        src='/me3.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='logo'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
