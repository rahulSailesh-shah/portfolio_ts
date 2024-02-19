import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className='w-full bg-slate-950 md:bg-transparent fixed top-0 left-0 right-0 z-50'>
                <div className='justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-2'>
                    <div>
                        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                            <Link href='/'>
                                <Image
                                    src='/logo.svg'
                                    width={60}
                                    height={60}
                                    alt='logo'
                                    className='focus:border-none active:border-none md:ml-12'
                                />
                            </Link>
                            <div className='md:hidden'>
                                <button
                                    className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image
                                            src='/close.svg'
                                            width={30}
                                            height={30}
                                            alt='logo'
                                        />
                                    ) : (
                                        <Image
                                            src='/hamburger.svg'
                                            width={30}
                                            height={30}
                                            alt='logo'
                                            className='focus:border-none active:border-none'
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`
                            flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
                             ${navbar ? "p-12 md:p-0 block" : "hidden"}`}
                        >
                            <ul className='h-screen md:hidden'>
                                <li className='pb-4 text-xl text-white py-4 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-900  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent'>
                                    <Link
                                        href='#about'
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className='pb-4 text-xl text-white py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent'>
                                    <Link
                                        href='#work'
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        Work
                                    </Link>
                                </li>
                                <li className='pb-4 text-xl text-white py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent'>
                                    <Link
                                        href='#contact'
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className='pb-4 text-xl text-white py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent'>
                                    <Link
                                        href='#projects'
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className='pb-4 text-xl text-white py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent'>
                                    <a
                                        onClick={() => setNavbar(!navbar)}
                                        href='/resume.pdf'
                                        download='Rahul_Shah_Resume.pdf'
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
