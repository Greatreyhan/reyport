import React from 'react'
import Image from 'next/image'
import B4 from '/public/img/B4.jpg'
import PC4 from '/public/img/P4.jpeg'
import { IoMdDownload } from "react-icons/io";


const P4
 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full h-96 relative'>
                    <Image
                        src={B4}
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full grayscale-[70%]'
                    />
                </div>

            </div>

            {/* Description */}
            <div className='w-8/12 mx-auto'>

                {/* Title */}
                <h1 className='mt-8 text-5xl text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Andromeda Robotic Team for Kontes Robot SAR Indonesia.</h1>
                <h2 className='text-lg my-4 font-mono text-white'>Finalist Kontes Robot SAR Indonesia (KRSRI) | Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</h2>

                {/* Video */}
                <iframe
                    src="https://drive.google.com/file/d/1Pj6MJwO-X5dVo3n8vie78aXTeoYpdKGy/preview"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>

                {/* Description */}
                <p className='text-white text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    In the Andromeda Robotic Team, my role involved programming the hexapod robot, focusing on both the kinematics of its legs and the integration of sensor data to ensure accurate movement across the competition arena. I was responsible for developing the kinematic models that control the individual movements of the robot's six legs, allowing it to navigate complex terrains with stability and precision. Additionally, I implemented algorithms that process sensor readings to adapt the robot's movements based on real-time environmental conditions, ensuring that the robot could effectively respond to obstacles and follow the designated path in the arena. This work required a deep understanding of robotic motion control and sensor integration, ensuring that the robot could perform its search and rescue tasks efficiently.
                </p>

                <Image src={PC4}
                    alt="Hero"
                    className='w-8/12 h-full mx-auto py-8' />

                {/* CTA */}
                <div className='w-full flex justify-center gap-5'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://kontesrobotindonesia.id/data/2023/BukuPedomanKRI2023.pdf"><span>KRI Guideline</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P4
