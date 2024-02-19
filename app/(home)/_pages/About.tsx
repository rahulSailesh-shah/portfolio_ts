"use client";

import Image from "next/legacy/image";
import React, { useRef } from "react";
import Button from "../_components/Button";
import Heading from "../_components/Heading";
import { useScroll, motion } from "framer-motion";
import { TextGenerateEffect } from "../_components/TextGenerate";

const About = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.9 1"],
    });

    const words1 = ` I'm Rahul Shah, currently pursuing a Master’s in Computer
    Science at Arizona State University. My coding journey
    started unexpectedly in college, taking a web development
    elective. Now, as a software engineer, I've worked on
    diverse tech projects, focusing on improving user
    experiences. 
    Outside of coding, you'll find me hiking, playing table
    tennis, or brainstorming over coffee. I'm eager to
    contribute my skills to projects that break norms and push
    boundaries. Let's create something awesome together.`;

    return (
        <motion.div
            id='about'
            ref={ref}
            style={{
                opacity: scrollYProgress,
            }}
            className='text-white bg-slate-950 lg:mt-20 flex lg:flex-row flex-col lg:ml-32 justify-around lg:px-20 px-6'
        >
            <div className='text-[#cdcdcd] lg:w-2/5 '>
                <h1 className='text-4xl font-semibold mb-10 text-white'>
                    Hi There
                </h1>
                <TextGenerateEffect words={words1} />

                <div className='mt-10'>
                    <Button text='Send me a message' to='contact' />
                </div>
            </div>
            <div className='lg:w-2/5 mt-12'>
                <div className='mb-8 ml-2'>
                    <Heading text='About Me' />
                </div>
                <div className=' h-[40rem] bg-[rgb(126,126,126)] rounded-md relative overflow-hidden group transition-transform transform hover:scale-[1.02]'>
                    <Image
                        src='/me.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='logo'
                        className='filter grayscale transition-transform transform group-hover:filter-none'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
