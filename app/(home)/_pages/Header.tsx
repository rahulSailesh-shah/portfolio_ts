"use client";

import { LampContainer } from "../_components/lamp";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../_components/Button";

export default function Header() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center lg:text-4xl font-medium text-transparent'
            >
                <div className='lg:w-[56rem] mt-28'>
                    <h1 className='mb-4 lg:text-3xl text-xl'>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            R
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            A
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            H
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            U
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-6'>
                            L
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            S
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            H
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            A
                        </span>
                        <span className=' font-medium text-[#cdcdcd] pr-2'>
                            H
                        </span>
                    </h1>
                    <h1 className='text-[#cdcdcd] lg:text-6xl text-4xl font-light '>
                        I am a{" "}
                        <span className='font-semibold text-cyan-500'>
                            Full Stack Developer
                        </span>{" "}
                    </h1>
                    <p className='text-[#cdcdcd] mt-8 lg:text-xl leading-loose font-normal'>
                        Specialising in crafting seamless web and mobile
                        experiences, <br className='lg:block hidden' /> I am
                        currently pursuing a Master's in Computer Science at{" "}
                        <a
                            href='https://www.asu.edu'
                            target='_blank'
                            className='text-cyan-500'
                        >
                            Arizona State University.
                        </a>
                    </p>
                    <div className='mt-6'>
                        <Button text='Contact Me' to='contact' />
                    </div>
                </div>
            </motion.h1>
        </LampContainer>
    );
}
