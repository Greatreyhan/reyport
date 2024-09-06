import React from 'react'
import Image from 'next/image'
import B3 from '/public/img/B3.jpg'
import PC3 from '/public/img/P3.png'
import { IoMdDownload } from "react-icons/io";


const P3 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full md:h-96 h-44 relative'>
                    <Image
                        src={B3}
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
                <h1 className='mt-8 md:text-5xl text-3xl  text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Automatic IoT-Based Tree Seedling Planter as a Solution to Accelerate Reforestation Rates in Support of the 2030 Sustainable Development Goals (SDGs)</h1>
                <h2 className='md:text-lg text-sm my-4 font-mono text-white'>PKM-KC 2022 PIMNAS & Funding Awardee - Simbelmawa, Kemdikbud, Indonesia                </h2>

                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/RX8rT-F6Vdw?si=a_b62tdfndwm5CPO"
                    allow="autoplay"
                    className='w-full md:h-96 h-64 mt-16'
                ></iframe>
                {/* Description */}
                <p className='text-white text-lg md:text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    Indonesia is one of the countries located along the equator, giving it a tropical climate with an abundance of diverse flora and fauna. One of the key features of tropical countries is the presence of vast rainforests. These rainforests play an essential role, not only as habitats for various wildlife species but also in preventing natural disasters such as floods and landslides (Murdiyanto and Gutomo, 2015).
                </p>

                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    However, in recent years, the forested areas in Indonesia have been steadily declining. This decline is due to several factors, including natural causes and human activities. Forest fires, in particular, have become a frequent issue. For example, according to a report from Detiknews, 1,235 hectares of forest in Riau were burned in 2021. Additionally, deforested land in Indonesia continues to expand each year. Data from Global Forest Watch indicates that from 2002 to 2020, Indonesia lost 9.75 million hectares of primary forest. The causes of this deforestation include land conversion for plantations, fire disasters, and illegal activities such as logging and mining. If left unchecked, this deforestation will lead to further forest degradation, ultimately turning these areas into barren land.
                </p>

                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    One effective way to address deforestation is through reforestation. Reforestation is a tangible step toward restoring deforested areas by planting new trees. Indonesia has implemented reforestation programs for many years, but the pace of these efforts remains insufficient. According to data from Forest Digest, the government’s capacity to rehabilitate deforested land is only 200,000 hectares per year, while the deforestation rate in Indonesia reaches 450,000 hectares per year, with a total of 13.4 million hectares of critical land remaining (Susetyo, 2021). This imbalance must be addressed urgently to optimize reforestation efforts and protect vulnerable land. Reforestation is a key focus of the Sustainable Development Goals (SDGs) 2030, making it crucial to optimize this program.
                </p>

                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    There are several factors that hinder reforestation efforts. One major challenge is the lack of human resources to support and participate in reforestation activities. The government alone cannot maximize reforestation without direct community involvement. One reason for the low participation rate is a lack of awareness about the importance of reforestation (Nento and Tueno, 2019). Additionally, reforestation efforts in Indonesia still rely on manual methods and simple tools, making them less efficient. The manual reforestation process becomes ineffective, especially when there are insufficient human resources to participate (Verhuliesov, 2021).
                </p>

                <Image src={PC3}
                    alt="Hero"
                    className='w-5/12 h-full mx-auto py-8' />

                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    Given these challenges, innovation is needed to improve the reforestation process. To address this, the PKM-KC team aims to develop an automatic tree seedling planter to help increase the rate of reforestation in Indonesia. This tool will be designed with IoT-based automation, allowing for remote control. The implementation of this automatic system will ease the reforestation process without requiring a large workforce. The planting tool will carry multiple tree seedlings and plant them automatically in pre-determined areas. The system will also ensure accurate planting distances according to the plan. By combining mechanical and electrical systems, the tool is expected to work quickly and accurately. With the development of this tool, it is hoped that the reforestation rate can be accelerated, contributing to the achievement of the Sustainable Development Goals (SDGs) 2030.
                </p>

                

                {/* CTA */}
                <div className='w-full flex justify-center mt-8 gap-5'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1gLGHkJzGp9DjW3Hl9WcGkl1qaGJAxCtV/view?usp=sharing"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/PKM-Alat-Penanam-Otomatis"><span>System Program</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/gregover"><span>Web-App Program</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P3