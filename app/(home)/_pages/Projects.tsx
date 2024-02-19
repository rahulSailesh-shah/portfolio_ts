"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import IconButton from "../_components/IconButton";
import Link from "next/link";
import { PinContainer } from "../_components/pin";
import Heading from "../_components/Heading";
import Image from "next/legacy/image";

const Project = () => {
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const YProgress = (ref: any) => {
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["0 1", "1.1 1"],
        });

        return scrollYProgress;
    };

    return (
        <div
            className='flex flex-col relative justify-center items-center mt-[10rem]'
            id='projects'
        >
            <motion.div
                ref={project1Ref}
                style={{
                    opacity: YProgress(project1Ref),
                }}
                className='px-4'
            >
                <div className='w-full flex lg:flex-row flex-col justify-around lg:mb-[10rem] mb-[4rem]'>
                    <div className=''>
                        <PinContainer
                            title='/figma-clone-coral.vercel.app/'
                            href='https://figma-clone-coral.vercel.app/'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[30rem] w-[24rem] h-[20rem]'>
                                <Image
                                    src='/figma.png'
                                    layout='fill'
                                    objectFit='cover'
                                    alt='logo'
                                />
                            </div>
                        </PinContainer>
                    </div>

                    <div className='lg:w-[32rem] w-full lg:ml-40 sm:justify-center px-4'>
                        <Heading text='01' />
                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            FigPro
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Developed a Figma clone with support for live
                            collaboration, multi-cursors, reactions, and
                            comments using fabric.js. It supports active user
                            tracking, comment bubbles, shape creation, image
                            uploading, and freeform drawing.
                        </p>
                        <div className='text-cyan-500 text-sm mt-4'>
                            <span className='mr-4'>Next.js</span>{" "}
                            <span className='mr-4'>Liveblocks</span>{" "}
                            <span className='mr-4'>Fabric.js</span>{" "}
                            <span className='mr-4'>Tailwind</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://figma-clone-coral.vercel.app/'
                                target='_blank'
                            >
                                <IconButton
                                    text='View Project'
                                    type='external'
                                />
                            </a>

                            <a
                                href='https://github.com/rahulSailesh-shah/figma_clone'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={project2Ref}
                style={{
                    opacity: YProgress(project2Ref),
                }}
                className='lg:w-fit w-full'
            >
                <div className='w-full flex lg:flex-row flex-col-reverse justify-around lg:mb-[10rem] mb-[4rem]'>
                    <div className='lg:w-[32rem] w-full lg:mr-40 px-4'>
                        <Heading text='02' />
                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            CoDev Space
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Crafted an collaborative online Python coding IDE
                            using React and Web Sockets enabling real-time code
                            development and execution, featuring live
                            collaboration through shared coding rooms, fostering
                            seamless teamwork among users.
                        </p>
                        <div className='text-cyan-500 text-sm mt-4'>
                            <span className='mr-4'>Web Sockets</span>{" "}
                            <span className='mr-4'>React</span>{" "}
                            <span className='mr-4'>Redux</span>{" "}
                            <span className='mr-4'>Express</span>{" "}
                            <span className='mr-4'>MongoDB</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://codev-space.onrender.com/'
                                target='_blank'
                            >
                                <IconButton
                                    text='View Project'
                                    type='external'
                                />
                            </a>

                            <a
                                href='https://github.com/rahulSailesh-shah/CoDev-Space'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <PinContainer
                            title='/codev-space.onrender.com'
                            href='https://codev-space.onrender.com'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[30rem] w-[24rem] h-[20rem] '>
                                <Image
                                    src='/codev.png'
                                    layout='fill'
                                    objectFit='cover'
                                    alt='logo'
                                />
                            </div>
                        </PinContainer>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={project3Ref}
                style={{
                    opacity: YProgress(project3Ref),
                    marginBottom: "10rem",
                }}
                className='px-4'
            >
                <div className='lg:w-fit w-full flex lg:flex-row flex-col justify-around'>
                    <div className=''>
                        <PinContainer
                            title='/rahulSailesh-shah/Route-Tracker'
                            href='https://github.com/rahulSailesh-shah/Route-Tracker.git'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[30rem] w-[24rem] h-[20rem] '>
                                <Image
                                    src='/route.png'
                                    layout='fill'
                                    objectFit='cover'
                                    alt='logo'
                                />
                            </div>
                        </PinContainer>
                    </div>

                    <div className='lg:w-[32rem] w-full lg:ml-40 px-4'>
                        <Heading text='03' />

                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            Route Tracker
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Developed a React Native mobile app harnessing GPS
                            capabilities to track and record routes, storing
                            them in MongoDB for review, distance tracking, and
                            implementing comprehensive user authentication.
                        </p>
                        <div className='text-cyan-500 text-sm mt-4'>
                            <span className='mr-4'>React Native</span>{" "}
                            <span className='mr-4'>Node.js</span>{" "}
                            <span className='mr-4'>MongoDB</span>{" "}
                            <span className='mr-4'>Express</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://github.com/rahulSailesh-shah/Route-Tracker'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
