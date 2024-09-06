'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


const Navigation = () => {
    const [nav,setNav] = useState(false)
    const pathname = usePathname()

    return (
        <nav className='fixed w-full mx-auto backdrop-blur-md z-50'>
            <div className='w-10/12 mx-auto flex justify-between py-2 items-center'>
                {/* Logo */}
                <div>
                    <h1 className='text-2xl font-sans font-medium text-orange-500'>Greatreyhan.</h1>
                </div>

                {/* Menu */}
                <div className='text-sm gap-5 md:flex hidden'>
                    <a className={` ${pathname == "/" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#profile">Me</a>
                    <a className={` ${pathname == "/work" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#work">Work</a>
                    <a className={` ${pathname == "/project" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#project">Project</a>
                    <a className={` ${pathname == "/resume" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#experience">Experience</a>
                    <a className={` ${pathname == "/contact" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#contact">Contact Me</a>
                </div>

                {/* Social Media (CTA) */}
                <div className='flex items-center gap-3'>
                    <a href="https://www.linkedin.com/in/greatreyhan"><IoLogoLinkedin className='text-2xl' /></a>
                    <a href="https://github.com/Greatreyhan"><IoLogoGithub className='text-2xl' /></a>
                    <a href="https://www.instagram.com/greatreyhans/"><IoLogoInstagram className='text-2xl' /></a>
                </div>

                {/* Hidden Nav */}
                <GiHamburgerMenu onClick={()=>setNav(!nav)} className={`text-white text-2xl cursor-pointer ${nav ? 'hidden': 'md:hidden block'}`} />
                <MdClose onClick={()=>setNav(!nav)} className={`text-white text-2xl cursor-pointer ${nav ? 'md:hidden block':'hidden'}`} />
            </div>
            {nav ? 
            (
            <div className='w-screen fixed z-50 bg-black bg-opacity-90 h-screen flex justify-center items-center flex-col gap-5' style={{ fontFamily: 'Baskervville SC, serif' }}>
                <a onClick={()=>setNav(!nav)} className={` ${pathname == "/" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#profile">Me</a>
                <a onClick={()=>setNav(!nav)} className={` ${pathname == "/project" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#work">Work</a>
                <a onClick={()=>setNav(!nav)} className={` ${pathname == "/work" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#project">Project</a>
                <a onClick={()=>setNav(!nav)} className={` ${pathname == "/resume" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#experience">Experience</a>
                <a onClick={()=>setNav(!nav)} className={` ${pathname == "/contact" ? 'font-semibold text-white' : "font-normal text-slate-200"} hover:underline`} href="/#contact">Contact Me</a>
            </div>
            ): null}
        </nav>
    )
}

export default Navigation