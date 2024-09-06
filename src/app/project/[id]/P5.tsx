import React from 'react'
import Image from 'next/image'
import B5 from '/public/img/B5.jpg'
import PC5 from '/public/img/P5.png'
import PC5B from '/public/img/P5B.jpg'
import { IoMdDownload } from "react-icons/io";


const P5 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full md:h-96 h-44 relative'>
                    <Image
                        src={B5}
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full grayscale-[70%]'
                    />
                </div>

            </div>

            {/* Description */}
            <div className='md:w-8/12 px-8 md:px-0 mx-auto'>

                {/* Title */}
                <h1 className='mt-8 md:text-5xl text-3xl  text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Sustainable Empowerment of Farmer Groups through Pitro Green System Technology in Efforts to Increase Crop Productivity in Pitrosari Village, Temanggung Regency.</h1>
                <h2 className='md:text-lg text-sm my-4 font-mono text-white'>PPK Ormawa Funding Awardee - Simbelmawa, Kemdikbud, Indonesia</h2>

                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/Hk2AtL9eEhk?si=Ic8j6oPalyFuD7jL "
                    allow="autoplay"
                    className='w-full md:h-96 h-64 mt-16'
                ></iframe>
                {/* Description */}
                <p className='text-white text-lg md:text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>In recent years, advancements in technology have played a pivotal role in revolutionizing various industries, and agriculture is no exception. This essay recounts my experience in developing a project monitoring system for plants inside a greenhouse. The system incorporated temperature, soil moisture, and light sensors, and the data collected were visualized through a React Native application. Moreover, the project aimed to automate the greenhouse environment by regulating the pump and valve systems based on predefined parameters.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The inspiration for this project stemmed from the growing need for sustainable and efficient agricultural practices. Greenhouses provide an ideal environment for plants, but maintaining optimal conditions can be challenging. By integrating sensors and automation, we aimed to address this challenge and improve crop yield and resource utilization.</p>
                <Image src={PC5}
                    alt="Hero"
                    className='w-4/12 h-full mx-auto py-8' />
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The initial phase involved selecting and integrating sensors to monitor key environmental factors. Temperature sensors were strategically placed to capture variations within the greenhouse, while soil moisture sensors were embedded in the plant beds to gauge the hydration levels. Additionally, light sensors were positioned to assess the intensity of sunlight reaching the plants. These sensors were crucial in providing real-time data for informed decision-making.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>To make the data accessible and user-friendly, a React Native application was developed. The application displayed live readings from the sensors, allowing users to monitor the greenhouse conditions remotely. The user interface was designed intuitively, providing a comprehensive overview of temperature, soil moisture, and light levels. This application empowered farmers to make timely decisions and take corrective actions when necessary.</p>
                <Image src={PC5B}
                    alt="Hero"
                    className='w-4/12 h-full mx-auto py-8' />
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The heart of the project lay in the automation logic. By establishing predefined parameters for each sensor, we developed a system that could autonomously control the greenhouse environment. For instance, if the temperature exceeded a certain threshold, the system would activate the ventilation or cooling system. Similarly, the soil moisture levels dictated the operation of the irrigation system, ensuring that plants received adequate water. The light sensors played a crucial role in controlling artificial lighting in case of insufficient sunlight.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The implementation of this project brought forth numerous benefits. Farmers could now remotely monitor and control their greenhouse environments, leading to increased efficiency and resource utilization. The automation of pumps and valves significantly reduced the manual labor required for maintaining optimal conditions.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>However, challenges were encountered during the integration process, including calibrating sensors for accurate readings and refining the automation logic to adapt to changing environmental conditions. Overcoming these challenges strengthened our understanding of the complexities involved in merging hardware and software components for agricultural applications.</p>

                {/* CTA */}
                <div className='w-full flex justify-center md:gap-5 gap-2 text-sm mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/pgs_controls"><span>Control System Program</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/pgs_sensor"><span>Sensor System Program</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/pgs_app"><span>Application Program</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P5