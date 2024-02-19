"use client";
import Image from "next/legacy/image";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { BackgroundGradient } from "../_components/background-gradient";
import Heading from "../_components/Heading";

const Work = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.9 1"],
    });
    return (
        <motion.div
            ref={ref}
            style={{
                opacity: scrollYProgress,
            }}
            id='work'
            className='flex justify-center'
        >
            <div className='flex flex-col mt-20 w-full md:w-fit'>
                <div className='flex items-center self-start lg:mb-12 mb-8 lg:ml-20 ml-6'>
                    <Heading text='Work Experience' />
                </div>

                {/* Second section with similar modifications */}
                <div className='flex w-full'>
                    <div className='lg:flex hidden h-40 items-center relative'>
                        <BackgroundGradient img='/asulogo.png' />
                        <div className='w-20 h-px bg-gray-700'></div>
                        <span className='absolute -right-3 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-500 z-50'></span>
                    </div>

                    <ol className='relative border-s border-gray-200 dark:border-gray-700 w-full md:w-[50rem] lg:mx-0 mx-4'>
                        <li className='mb-10 lg:ms-12 ms-4'>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                January 2024 - Present
                            </time>
                            <h3 className='text-xl font-semibold text-white mb-1'>
                                Enterprise Technology at Arizona State
                                University
                            </h3>
                            <h4 className='text-cyan-500 font-medium mb-1'>
                                AI Full-stack Developer
                            </h4>
                            <p className='mb-4 text-base font-normal text-white dark:text-gray-400'>
                                As an MLOps engineer, I am currently responsible
                                for developing environments and ML pipelines for
                                various LLM applications. This involves
                                provisioning Kubernetes clusters on AWS using
                                Docker and Terraform. Additionally, I am
                                actively contributing to the creation of a
                                cutting-edge AI/ML platform and custom LLM
                                applications for ASU faculty and staff,
                                utilizing React.js, DynamoDB, and AWS Lambda.
                            </p>
                        </li>
                    </ol>
                </div>

                {/* Second section with similar modifications */}
                <div className='flex w-full'>
                    <div className='lg:flex hidden h-40 items-center relative'>
                        <BackgroundGradient img='/allegion.png' />
                        <div className='w-20 h-px bg-gray-700'></div>
                        <span className='absolute -right-3 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-500 z-50'></span>
                    </div>

                    <ol className='relative border-s border-gray-200 dark:border-gray-700 w-full md:w-[50rem] lg:mx-0 mx-4'>
                        <li className='mb-10 lg:ms-12 ms-4'>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                March 2022 - July 2023
                            </time>
                            <h3 className='text-xl font-semibold text-white mb-1'>
                                Allegion
                            </h3>
                            <h4 className='text-cyan-500 font-medium mb-1'>
                                Software Engineer II (Full-Stack)
                            </h4>
                            <p className='mb-4 text-base font-normal text-white dark:text-gray-400'>
                                Optimized communication for IoT devices in the
                                Engage mobile app through RESTful API
                                implementation and improved frontend
                                responsiveness by incorporating Redux.
                                Established a Jenkins CI/CD pipeline for over
                                100 weekly builds and engineered an Automation
                                Framework, reducing manual testing efforts by
                                70%.
                            </p>
                        </li>
                        <li className='mb-10 lg:ms-12 ms-4'>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                June 2020 - March 2022
                            </time>

                            <h4 className='text-cyan-500 font-medium mb-1'>
                                Software Engineer I
                            </h4>
                            <p className='mb-4 text-base font-normal text-white dark:text-gray-400'>
                                Contributed to integrating access code options
                                in both front-end and back-end of Engage mobile
                                app, enhancing user adoption and security.
                                Engineered a Python and React-based
                                Card-Simulator tool, eliminating the need for
                                numerous physical card types. Implemented
                                advanced geolocation features in Engage app,
                                promoting increased remote access usage and
                                client satisfaction.
                            </p>
                        </li>
                        <li className='mb-10 lg:ms-12 ms-4'>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                January 2020 - June 2020
                            </time>

                            <h4 className='text-cyan-500 font-medium mb-1'>
                                Software Engineer Intern
                            </h4>
                            <p className='mb-4 text-base font-normal text-white dark:text-gray-400'>
                                Led the development of a full-stack web app
                                (React.js, Node.js, AWS S3) for centralized
                                document storage and transitioning to online
                                documentation. Created a React.js app for Azure
                                DevOps Data Mining, streamlining data
                                extraction. Conducted Python code reviews and
                                implemented refactoring for improved code
                                quality and maintainability.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
