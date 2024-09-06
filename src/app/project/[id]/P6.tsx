import React from 'react'
import Image from 'next/image'
import B6 from '/public/img/B6.jpg'
import PC6 from '/public/img/P6.png'
import { IoMdDownload } from "react-icons/io";


const P6 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full md:h-96 h-44 relative'>
                    <Image
                        src={B6}
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
                <h1 className='mt-8 md:text-5xl text-3xl  text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Optimization of Warehouse Automated Guided Vehicle with Indoor Positioning System-Based Navigation and Artificial Intelligence Algorithms to Enhance Industrial Warehouse Efficiency</h1>
                <h2 className='md:text-lg text-sm my-4 font-mono text-white'>Gold Medal at World Young Inventors Exhibition 2024 | ITEX, Malaysia</h2>

                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/M5sQa9pAAg0?si=Zso5M_yMc40XLEoX"
                    allow="autoplay"
                    className='w-full md:h-96 h-64 mt-16'
                ></iframe>
                {/* Description */}
                <p className='text-white text-lg md:text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>A warehouse is a facility used for storing, managing, and distributing goods or products efficiently. The growth of industry and global trade has led to increased reliance on warehouses as distribution centers. The rising volume of goods requiring storage and distribution demands high operational efficiency in warehouse management. However, most warehouse systems in Indonesia still depend on manual labor for managing and moving goods. Despite advancements in automation and information technology that assist in managing inventory, human limitations remain in terms of operational efficiency and speed. Warehousing systems that rely heavily on manual labor are prone to human error, slow in moving goods, and less adaptable to unexpected changes in inventory.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Generally, four processes occur within a warehouse: receiving, storing, picking, and shipping. The storage process is divided into two areas: the reserve area and the forward area. In the reserve area, goods are stored as efficiently as possible to save space. In the forward area, goods are arranged to facilitate easy picking based on demand. Transportation vehicles are needed in the forward area, as the goods are already grouped by destination, making them heavier and larger in quantity for shipping. This division creates a common warehouse concept where the reserve area is typically handled manually, while the forward area can utilize automated systems, such as robots, for transferring goods.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The use of robotic systems like Automated Guided Vehicles (AGVs) and Autonomous Mobile Robots (AMRs) is a solution for speeding up the automatic movement of goods. AGVs rely on specific guidance systems (such as lines and barcodes) and require operator supervision, whereas AMRs can navigate autonomously using perception, localization, cognition, and motion control. The combination of AMRs with omnidirectional wheels provides advantages such as simplicity in control and installation, a more flexible wheel configuration, and quicker response to direction changes.</p>
                <Image src={PC6}
                    alt="Hero"
                    className='w-4/12 h-full mx-auto py-8' />
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>To autonomously control an AMR, three key factors must be addressed: the robot’s current location, the destination, and how to reach the destination. The robot’s local position can be obtained through sensors (LiDAR, cameras, IMU, and encoders) perceiving the surrounding environment. Various methods exist to effectively determine the robot’s position in an indoor space, including sensor fusion, extended Kalman filters, probabilistic approaches, triangulation, and machine learning. The integration of robots with the internet also facilitates the exchange of information between robots, such as obstacles on their path or changes in route conditions. This technology reduces the computational load within the robot and enhances its navigation efficiency.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Data transmission over the internet supports the concept of a digital twin, which creates a digital representation of the AMR’s physical system. Internet-based data transmission allows warehouse managers to monitor and control robot operations in real time. A digital twin enables managers to run simulations and predictive analyses, aiding decision-making based on up-to-date information and responsiveness to dynamic changes within the warehouse. Thus, the use of digital twins plays a crucial role in enhancing efficiency and simplifying warehouse management.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Given the complexity of market demands and the need for operational efficiency in warehousing, the design of an Autonomous Mobile Robot (AMR) based on omnidirectional wheels with digital twin visualization via the Internet of Things is essential. Innovations in warehouse systems are expected not only to improve operational efficiency but also to provide flexibility in creating dynamic warehouses tailored to market needs.</p>


                {/* CTA */}
                <div className='w-full flex justify-center md:gap-5 gap-2 text-sm mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/drive/folders/1avcWOXYOtvTYalVQ5rJXT3b2Xor4kDWI?usp=sharing"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/STM32_AMR.git"><span>Embedded System Program</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/AMR_Web_Controller.git"><span>Web Application Program</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P6