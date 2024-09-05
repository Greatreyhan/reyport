import React from 'react'
import Image from 'next/image'
import B1 from '/public/img/B1.jpg'
import PC1 from '/public/img/P1.png'
import { IoMdDownload } from "react-icons/io";


const P8 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full h-96 relative'>
                    <Image
                        src={B1}
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
                <h1 className='mt-8 text-5xl text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Gravitational Water Vortex Power Plant (GWVPP) and Archimedes Screw Turbine</h1>
                <h2 className='text-lg my-4 font-mono text-white'>Top 10 of Hackathon Energy [Re]Spark - New Energy Nexus</h2>

                {/* Video */}
                <iframe
                    src="https://drive.google.com/file/d/144uStUNvJyc-Kww-c0khMDDuqjE5jAhm/preview"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>

                {/* Description */}
                <p className='text-white text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>Along with the passage of time, the population of Indonesia has continued to increase, as has the demand for staple foods and vegetables. According to data from the 2020 Population Census (BPS, 2020), the population of Indonesia was recorded at 270.20 million people, an increase of 32.56 million compared to the previous census. This population growth must be accompanied by efforts to meet the nation’s food needs.

                    Currently, food supplies in Indonesia still depend on imports from abroad. According to data from the Central Statistics Agency (BPS) in 2019, Indonesia imported 770,378.4 kg of vegetables and 724,131.1 kg of fruit from other countries. This is because domestic production has not yet been able to meet the growing demand for food. The quality of the harvest is also a contributing factor to Indonesia’s ongoing importation of food products. Therefore, to address crop failures and declining harvest yields, improving the quality of seeds planted is necessary.

                    The success or failure of plant seeds to germinate is determined by several factors, such as the age and storage time of the seeds. Extended storage time can lead to a decline in vigor and viability (Fatiya, 2019). As a result, seeds may not grow optimally, affecting farmers' harvest yields.

                    A previous study conducted by De Souza in 2015 showed that tomato seeds (Lycopersicon esculentum) exposed to a magnetic field of 120 mT for 10 minutes or 80 mT for 5 minutes increased fruit production by 17.9–21.3% and fruit weight by 47.3–51.7% compared to seeds that were not exposed to a magnetic field. Meanwhile, a study conducted by Rochmah in 2020 demonstrated that red chili peppers (Capsicum annuum L) exposed to a magnetic field could increase harvest yields and resist Fusarium sp. fungi, which can hinder the growth of chili plants.

                    Based on the above background, the author intends to design "SERIBUAN" (Seed Repairing Box with the Induction of Magnetic Field on Extremely Low Frequency) with IoT integration, which is an innovative application of magnetic field exposure to plant seeds. This tool aims to repair and improve the quality of aging seeds through exposure to ELF (Extremely Low Frequency) magnetic induction and is integrated via IoT (Internet of Things), allowing the device to be controlled through a smartphone based on the type of seed used.</p>

                <Image src={PC1}
                    alt="Hero"
                    className='w-8/12 h-full mx-auto py-8' />

                {/* CTA */}
                <div className='w-full flex justify-center gap-5'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://docs.google.com/document/d/1n4GbmhO7XXrF9Sc4lg3WSjZkFFt1Kc2v/edit?usp=drive_link&ouid=111329683089977458702&rtpof=true&sd=true"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1fzae2qZqdKyaKvnDEXaq_MgABxfx1eL3/view?usp=drive_link"><span>Application APK</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P8