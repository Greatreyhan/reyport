'use client'
import Image from "next/image";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HeroImage from "/public/img/Hero.jpeg"
import { IoIosArrowRoundForward } from "react-icons/io";



export default function Home() {
  return (
    <main className="bg-black text-slate-100">
      <Navigation />
      <Hero />

      {/* Executive Summary */}
      <div className="mx-auto w-10/12 flex" style={{ fontFamily: 'Baskervville SC, serif' }}>
        <h2 className="text-5xl font-sans font-semibold">About Me &<br/> My Work<span className="text-orange-500">.</span></h2>
        <div className="flex-1 text-md mx-8">
        <p className="text-justify text-slate-100">I am an Electrical Engineering student at Diponegoro University specializing in electronics, robotics, and automation. I have hands-on experience in enhancing automated systems, such as improving the control range of an excavator by 40% using MQTT during my internship at PT Asta Berkah Autonomous. As a Project Manager at PT Widya Solusi Utama, I increased email open rates by 9.77% through targeted analysis and led the installation of automated fingerprint systems. My leadership at the Undip Robotic Development Center resulted in an 80% increase in teams qualifying for the Indonesian Robot Contest. Proficient in C, Python, JavaScript, SolidWorks, Eagle, and Figma, I am passionate about robotics, automation, green energy, and team management.</p>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="mx-auto w-10/12 mt-24 border-b border-opacity-25 border-slate-300">
        <h2 className="text-5xl font-sans font-semibold">Project Showcase<span className="text-orange-500">.</span></h2>
        <div className="border-t border-opacity-25 border-slate-300 mt-4 flex items-center gap-x-10 py-4">
          <div className='rounded-full w-5/12 h-52 relative'>
            <Image
            src={HeroImage}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className='w-full h-full'
          />
          </div>
          <div className="flex-1" style={{ fontFamily: 'Baskervville SC, serif' }}>
            <h3 className="text-4xl capitalize">Project Air Makanan & Minuman di mana-mana</h3>
            <p className="mt-4 text-slate-200">Electrical Engineering student at Diponegoro University specializing in electronics, robotics, and automation. I have hands-on experience in enhancing automated systems, such as improving the control range of an excavator by 40% using MQTT during my internship at PT Asta Berkah Autonomous. As a Project Manager at PT Widya Solusi Utama, I increased email open rates by 9.77% through targeted analysis and led the installation of automated fingerprint systems. My leadership at the Undip Robotic Development Center resulted in an 80% increase in teams qualifying for the Indonesian Robot Contest. Proficient in C, Python, JavaScript, SolidWorks, Eagle, and Figma, I am passionate about robotics, automation, green energy, and team management</p>
            <a href="#" className="inline-flex items-center font-semibold mt-4 hover:text-orange-500"><span>Read More</span> <IoIosArrowRoundForward className="ml-2 text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mx-auto w-10/12 mt-24 border-b border-opacity-25 border-slate-300">
      <h2 className="text-5xl font-sans font-semibold text-center my-4">My Experience<span className="text-orange-500">.</span></h2>

      <div className="border-t border-opacity-25 border-slate-300 mt-4 flex items-center gap-x-10 py-4">
          <div className='rounded-full w-5/12 flex justify-center h-52 relative'>
            <h4 className="text-5xl font-bold" style={{ fontFamily: 'Baskervville SC, serif' }}>2019-2020.</h4>
          </div>
          <div className="flex-1" style={{ fontFamily: 'Baskervville SC, serif' }}>
            <h3 className="text-3xl capitalize">Project Air Makanan & Minuman di mana-mana</h3>
            <p className="mt-4 text-slate-200">Electrical Engineering student at Diponegoro University specializing in electronics, robotics, and automation. I have hands-on experience in enhancing automated systems, such as improving the control range of an excavator by 40% using MQTT during my internship at PT Asta Berkah Autonomous. As a Project Manager at PT Widya Solusi Utama, I increased email open rates by 9.77% through targeted analysis and led the installation of automated fingerprint systems. My leadership at the Undip Robotic Development Center resulted in an 80% increase in teams qualifying for the Indonesian Robot Contest. Proficient in C, Python, JavaScript, SolidWorks, Eagle, and Figma, I am passionate about robotics, automation, green energy, and team management</p>          </div>
        </div>

      </div>

      {/* Achievement */}
      <div className="mx-auto w-10/12 mt-24">
      <h2 className="text-5xl font-sans font-semibold text-right my-4">My Achievement<span className="text-orange-500">.</span></h2>
      <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="list-disc text-xl mt-8">
        <li>Lomba Makan krupuk Nasional</li>
      </ul>
      </div>

      <Footer />
    </main>
  );
}
