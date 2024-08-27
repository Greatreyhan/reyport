import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav className='fixed w-full mx-auto backdrop-blur-md z-50'>
            <div className='w-10/12 mx-auto flex justify-between py-2 items-center'>
                {/* Logo */}
                <div>
                    <h1 className='text-2xl font-sans font-medium text-orange-500'>Greatreyhan.</h1>
                </div>

                {/* Menu */}
                <div className='text-sm gap-5 flex'>
                    <Link className={` ${pathname == "/" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="/">Me</Link>
                    <Link className={` ${pathname == "/project" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="/">Project</Link>
                    <Link className={` ${pathname == "/resume" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="/">Resume</Link>
                    <Link className={` ${pathname == "/contact" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="/">Contact Me</Link>
                </div>

                {/* Social Media (CTA) */}
                <div className='flex items-center gap-3'>
                    <a href="#"><IoLogoLinkedin className='text-2xl' /></a>
                    <a href="#"><IoLogoGithub className='text-2xl' /></a>
                    <a href="#"><IoLogoInstagram className='text-2xl' /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation