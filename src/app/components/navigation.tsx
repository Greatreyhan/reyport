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
                    <a className={` ${pathname == "/" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="#profile">Me</a>
                    <a className={` ${pathname == "/project" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="#project">Project</a>
                    <a className={` ${pathname == "/resume" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="#experience">Experience</a>
                    <a className={` ${pathname == "/contact" ? 'font-semibold text-white' : "font-normal text-slate-200" } hover:underline`} href="#contact">Contact Me</a>
                </div>

                {/* Social Media (CTA) */}
                <div className='flex items-center gap-3'>
                    <a href="https://www.linkedin.com/in/greatreyhan"><IoLogoLinkedin className='text-2xl' /></a>
                    <a href="https://github.com/Greatreyhan"><IoLogoGithub className='text-2xl' /></a>
                    <a href="https://www.instagram.com/greatreyhans/"><IoLogoInstagram className='text-2xl' /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation