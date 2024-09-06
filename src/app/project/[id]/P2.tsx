import React from 'react'
import Image from 'next/image'
import B2 from '/public/img/B2.jpg'
import PC2 from '/public/img/P2.png'
import { IoMdDownload } from "react-icons/io";


const P2 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full h-96 relative'>
                    <Image
                        src={B2}
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
                <h2 className='text-md mt-4 font-mono text-white'>Top 10 of Hackathon Energy [Re]Spark - New Energy Nexus</h2>
                <h2 className='text-md font-mono text-white'>Top 10 of Start Up Energy Transition Innovation Challenge - Kementerian Energi dan Sumber Daya Mineral</h2>
                <h2 className='text-md font-mono text-white'>Top 10 Digital Innovation and Technology Competition 2022: Future of Energy - ASTRA</h2>
                {/* Video */}
                <iframe
                    src="https://drive.google.com/file/d/1qRmKMH-rHXvolzMFjTC_8ZJeXmoSDQZw/preview"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>

                {/* Description */}
                <p className='text-white text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    Fossil-fuel-powered vehicles have become one of the largest contributors to air pollution. The emissions generated by internal combustion engine vehicles have a severe impact on the environment, leading to increased pressure to transition to electric vehicles (EVs). However, Indonesia&apos;s complete transition to EVs and renewable energy faces numerous challenges, particularly in terms of infrastructure readiness and the availability of sustainable clean energy.
                </p>

                <h3 className='text-white text-2xl mt-4 font-semibold' style={{ fontFamily: 'Baskervville SC, serif' }}>Infrastructure and Energy Challenges</h3>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    One of the main obstacles to fully adopting electric vehicles is Indonesia&apos;s reliance on fossil-based electricity generation. According to data from PLN in 2020, about 88% of the country&apos;s electricity still depends on fossil fuels, producing 195 million tons of CO2 emissions annually. Simply replacing fossil-fueled vehicles with electric ones, while still powering the grid with fossil fuels, would have the same outcome—pollution remains.
                </p>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    Indonesia has significant renewable energy potential, reaching 3.6 gigawatts (GW), according to the Ministry of Energy and Mineral Resources (ESDM) in 2022. However, only 0.3% of this potential is currently being utilized, reflecting a lack of investment and infrastructure to support clean energy. Meanwhile, solar power plants (PLTS), although seen as a key solution for public electric vehicle charging stations (SPKLU), have yet to operate at optimum efficiency. They require battery storage, which adds cost and complexity (INDEF, 2021).
                </p>

                <h3 className='text-white text-2xl mt-4 font-semibold' style={{ fontFamily: 'Baskervville SC, serif' }}>Unlocking the Energy Potential of Rivers
                </h3>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    One of the main obIndonesia&apos;s abundant natural resources, including its vast river systems, present a significant opportunity for renewable energy development. The country has 5,590 major rivers and 65,017 smaller tributaries, with a total flow area of 15 km². As a maritime nation, Indonesia&apos;s flowing rivers offer tremendous potential for energy generation. The question is, how can we maximize this energy source and store it efficiently? stacles to fully adopting electric vehicles is Indonesia&apos;s reliance on fossil-based electricity generation. According to data from PLN in 2020, about 88% of the country&apos;s electricity still depends on fossil fuels, producing 195 million tons of CO2 emissions annually. Simply replacing fossil-fueled vehicles with electric ones, while still powering the grid with fossil fuels, would have the same outcome—pollution remains.
                </p>

                <Image src={PC2}
                    alt="Hero"
                    className='w-5/12 h-full mx-auto py-8' />

                <h3 className='text-white text-2xl mt-4 font-semibold' style={{ fontFamily: 'Baskervville SC, serif' }}>The Solution: Gravitation Water Vortex Power Plant (GWVPP) and Underwater Storage Energy (UWSE)
                </h3>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                    One promising solution is the development of the Gravitation Water Vortex Power Plant (GWVPP), a micro-hydro power technology that harnesses the flow of river water to generate electricity. This technology operates continuously for 24 hours a day, unlike solar power plants that function only 4-8 hours daily. GWVPP can operate on a small scale yet remain highly efficient, with a single vortex generating up to 15 kWh of energy—enough to power an electric vehicle for 6,000 km with 100% clean energy.
                </p>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                This technology can be further enhanced by utilizing Underwater Storage Energy (UWSE), an efficient method of storing energy generated by GWVPP under the sea. This system allows long-term energy storage in a cost-effective and environmentally friendly way compared to conventional battery systems. By using UWSE, renewable electricity from flowing water can be stored and accessed whenever needed to power SPKLU stations.                
                </p>

                <h3 className='text-white text-2xl mt-4 font-semibold' style={{ fontFamily: 'Baskervville SC, serif' }}>
                Case Study: Efficiency of GWVPP and UWSE for SPKLU
                </h3>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                In a case study, a single GWVPP unit with a capacity of 45 kWh can support electric vehicle journeys totaling 6,000 km without emitting any CO2. Additionally, compared to solar power plants, GWVPP offers more competitive installation costs, ranging from Rp 200-500 million, while solar power plants can cost Rp 615 million to 1 billion. GWVPP is also more reliable, operating 24/7, whereas solar power plants only work 4-8 hours per day depending on weather conditions.
                </p>

                <h3 className='text-white text-2xl mt-4 font-semibold' style={{ fontFamily: 'Baskervville SC, serif' }}>
                The Future of Renewable Energy in Indonesia
                </h3>

                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>
                With the potential of over 5,000 major rivers and 65,000 tributaries, Indonesia has a vast opportunity to leverage GWVPP technology as a major source of future renewable energy. The construction of small-scale micro-hydro power plants along these rivers offers a more economical and sustainable solution, especially when combined with UWSE technology. This approach not only reduces dependence on fossil-based energy but also supports the acceleration of electric vehicle adoption in Indonesia.                </p>



                {/* CTA */}
                <div className='w-full flex justify-center gap-5 mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://www.canva.com/design/DAFGBHWniXo/dNx5pSA_G_0mX93XOYmL4A/edit?utm_content=DAFGBHWniXo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><span>Deck GWVPP</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://www.canva.com/design/DAFGBHWniXo/dNx5pSA_G_0mX93XOYmL4A/edit?utm_content=DAFGBHWniXo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><span>Deck Archimedes Turbine</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P2