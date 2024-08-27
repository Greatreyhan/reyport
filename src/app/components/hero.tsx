import React from 'react'
import HeroImage from "/public/img/Hero.jpeg"
import Image from 'next/image'
import { MdFileDownload } from "react-icons/md";


const Hero = () => {
  return (
    <div className='bg-black mx-auto w-10/12 py-32 flex items-center gap-x-10 justify-center'>
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
        <h1 className='text-7xl font-semibold uppercase text-slate-100 leading-tight'>Hello! <br /> My Name Is <br /><span className='bg-orange-600 px-7 font-bold text-black capitalize' style={{ fontFamily: 'Baskervville SC, serif' }} >Reyhan.</span><br /> <span className='text-5xl'> An Electrical Engineer</span></h1>
        <a href="#" className='hover:underline underline-offset-2 mt-8 inline-flex items-center text-white-500 text-lg uppercase bg-white text-black px-8 py-1.5 font-semibold rounded-full'><span style={{ fontFamily: 'Baskervville SC, serif' }}>Download My CV</span><MdFileDownload className='ml-2' /></a>
      </div>
    </div>
  )
}

export default Hero