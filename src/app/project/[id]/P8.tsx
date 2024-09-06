import React from 'react'
import Image from 'next/image'
import B8 from '/public/img/B8.jpg'
import PC8 from '/public/img/P8.png'
import { IoMdDownload } from "react-icons/io";


const P8 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full h-96 relative'>
                    <Image
                        src={B8}
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
                <h1 className='mt-8 text-5xl text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Smart Electrifying Agriculture Integrated with IoT Through the Implementation of the Quine-McCluskey Algorithm</h1>
                <h2 className='text-lg my-4 font-mono text-white'>Innovillage 2022 Funding Awardee | Telkom Indonesia</h2>
                <h2 className='text-lg my-4 font-mono text-white'>Top 10 Innovation Green Technopreneur Competition PFSains 2022 | Pertamina Foundation</h2>
                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/gDBbWBbGS_Q?si=0uq7a_He45Zyi8mz"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>

                {/* Description */}
                <p className='text-white text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>Indonesia has significant potential to become the world&apos;s largest supplier of fruits and vegetables, thanks to its geographic location, which ensures consistent sunlight throughout the year. One fruit that shows promising growth potential in Indonesia is dragon fruit. According to data from the Central Bureau of Statistics (BPS), Indonesia’s dragon fruit exports have consistently increased with a positive trend of 12.91% between 2015 and 2020. Global demand for dragon fruit has also grown by around 4% annually, and this trend is expected to continue. By leveraging this opportunity, Indonesia’s dragon fruit exports could further contribute to achieving the Sustainable Development Goals (SDGs) by 2030, specifically Goal 2 (ending hunger) and Goal 8 (promoting economic growth). This can be realized through the implementation of sunlight engineering methods applied to dragon fruit cultivation.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Dragon fruit plants are classified as long-day plants, meaning they require at least 12 hours or more of sunlight exposure daily. Sunlight engineering methods can be applied to dragon fruit plants by illuminating them with LED lights at night, enabling them to continue the photosynthesis process after dark. This accelerates the fruiting process. With the proper lighting techniques, dragon fruit plants can even be harvested outside of their usual growing season. This method, frequently used by dragon fruit farmers, can increase harvest yields by up to 250%.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>One plantation that applies this lighting method to its dragon fruit crops is the Hutan Naga Organik Kudus plantation, located in Pasuruhan Kidul Village, Jati Subdistrict, Kudus Regency. Managed by seven local residents, this plantation spans about one hectare and grows around 200 dragon fruit trees, with an average annual production of 8 tons. Additionally, this plantation has the potential to turn Pasuruhan Kidul into an agro-tourism village, as it already hosts various activities, from educational tours about dragon fruit to organic fertilizer-making workshops.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Despite these successes, the plantation faces several challenges. Based on an interview with Mr. Eko, one of the plantation managers, the high monthly electricity costs required to light the plants at night have led to financial losses. This is due to overexposure of the plants to artificial light beyond the necessary duration. Additionally, because the plantation is located far from Mr. Eko’s home, he has to travel back and forth daily to tend to the crops. Mr. Eko also has to hire someone to care for the plantation, especially when he is out of town, just to water the plants and turn on the lights at night. Furthermore, the lack of supervision over the plantation has led to frequent thefts of ripe dragon fruits.</p>
                <Image src={PC8}
                    alt="Hero"
                    className='w-8/12 h-full mx-auto py-8' />

                {/* CTA */}
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>To address the issues faced by Mr. Eko, we propose developing a smart security and electrifying agriculture technology product integrated with the Internet of Things (IoT) through a website to increase dragon fruit productivity. This technology will automate the irrigation and lighting of the plants, accelerating their growth. Through IoT, the plantation can be monitored in real-time via the website. The use of solar panels, integrated with the Quine-McCluskey algorithm, aims to optimize and save on electricity consumption for the technology. This product is expected to help Mr. Eko manage the plantation remotely and increase dragon fruit yields in Pasuruhan Kidul Village.</p>
                
                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/wN75tNWFiL8?si=K3d_gsAF6Z4HSk2f"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>
                
                <div className='w-full flex justify-center gap-5 mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1Bp19aUhjs1lf-nTQ2HP7BwX1jKjOKaoI/view?usp=sharing"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/Program-Innovillage.git"><span>Embedded System Program</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Greatreyhan/WebsiteInnovillage.git"><span>Web Application Program</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P8