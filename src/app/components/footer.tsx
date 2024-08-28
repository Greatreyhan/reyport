import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";


const Footer = () => {
    return (
        <div className='border-t border-opacity-25 border-slate-300 w-10/12 mx-auto mt-16'>
            <div className='flex items-center gap-3 mt-4 justify-center'>
                <a href="https://www.linkedin.com/in/greatreyhan"><IoLogoLinkedin className='text-4xl' /></a>
                <a href="https://github.com/Greatreyhan"><IoLogoGithub className='text-4xl' /></a>
                <a href="https://www.instagram.com/greatreyhans/"><IoLogoInstagram className='text-4xl' /></a>
            </div>
        </div>
    )
}

export default Footer