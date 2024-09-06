import React from 'react'
import HeroImage from "/public/img/Hero.jpeg"
import Image from 'next/image'
import { MdFileDownload } from "react-icons/md";


const Hero = () => {
  return (
    <div id="profile" className='bg-black mx-auto md:w-10/12 md:py-32 py-16 px-8 md:px-0 flex flex-col md:flex-row items-center gap-x-10 justify-center'>
      {/* Pict */}
      <div className='rounded-full w-72 h-72 mx-12 relative'>
        <Image
          src={HeroImage}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className='w-full h-full rounded-full'
        />
      </div>

      {/* Text and CTA */}
      <div className='flex-1'>
        <h1 className='md:text-7xl text-5xl md:mt-0 mt-8 font-semibold uppercase text-slate-100 leading-tight text-center md:text-left'>Hello! <br /> My Name Is <br /><span className='bg-orange-600 px-7 font-bold text-black capitalize' style={{ fontFamily: 'Baskervville SC, serif' }} >Reyhan.</span><br /> <span className='md:text-5xl text-4xl'> An Electrical Engineer</span></h1>
        <a href="https://drive.google.com/file/d/1bPCaTMOqeJxyB66FIWY1h1A8ACGLFNz2/view?usp=sharing" target='_blank' className='hover:underline underline-offset-2 mt-8 flex justify-center md:mx-0 mx-16 md:inline-flex items-center text-white-500 text-lg uppercase bg-white text-black px-8 py-1.5 font-semibold rounded-full'><span style={{ fontFamily: 'Baskervville SC, serif' }}>Download My CV</span><MdFileDownload className='ml-2' /></a>
      </div>
    </div>
  )
}

export default Hero