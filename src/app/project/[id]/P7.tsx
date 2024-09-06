import React from 'react'
import Image from 'next/image'
import B7 from '/public/img/B7.jpg'
import PC7 from '/public/img/P7.png'
import { IoMdDownload } from "react-icons/io";


const P7 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full md:h-96 h-44 relative'>
                    <Image
                        src={B7}
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
                <h1 className='mt-8 md:text-5xl text-3xl  text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Optimization of Dye-Sensitized Solar Cells Based on Red Cabbage, Teak Leaves, and Triphenylamine with Magnesium Dopant as a Means to Enhance Solar Energy Accessibility</h1>
                <h2 className='md:text-lg text-sm my-4 font-mono text-white'>PKM-RE 2023 Funding Awardee - Simbelmawa, Kemdikbud, Indonesia</h2>

                {/* Description */}
                <p className='text-white text-lg md:text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>Renewable energy plays a crucial role in reducing global warming and climate change. This makes the use of renewable energy one of the key focuses for achieving the 2030 Sustainable Development Goals (SDGs), specifically Goal 7, which is affordable and clean energy. Various efforts have been made by the Indonesian government to realize this goal. The government established the National Energy Policy (KEN) through Government Regulation No. 79 of 2014, which mandates the use of New and Renewable Energy (NRE) to reach at least 23% of the primary energy mix by 2025 (Ministry of Energy and Mineral Resources, 2021). However, as of 2021, NRE contributed only around 12.16% of the total energy produced in Indonesia (BPS, 2021).</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Solar cells hold great potential as a source of NRE in Indonesia, given the country’s abundant solar energy resources, which reach approximately 200,000 MW. However, only about 150 MW, or 0.08% of this potential, has been utilized (Ministry of Energy and Mineral Resources, 2021). Silicon-based solar cells have been widely developed and are highly efficient, but they are relatively expensive due to the complex production process. Additionally, silicon contains hazardous metals and is not environmentally friendly (Iwantono et al., 2018). To address these issues, third-generation solar panel technology, such as Dye-Sensitized Solar Cells (DSSCs), has emerged. DSSCs offer advantages like low production costs, simple fabrication, environmental friendliness, and good energy conversion performance in both light and dark conditions (Diantoro et al., 2017).</p>
                <Image src={PC7}
                    alt="Hero"
                    className='w-6/12 h-full mx-auto py-8' />
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>One crucial component affecting the performance of DSSCs is the dye. DSSCs can use natural dyes extracted from various plant parts containing betalains, carotenoids, chlorophyll, and flavonoids as photosensitizers. However, most natural dyes have a narrow light absorption wavelength range (Pratiwi et al., 2017). According to research by Chang et al. (2013) in Pratiwi et al. (2017), the combination of anthocyanin and chlorophyll pigments results in higher efficiency, as it expands the light absorption spectrum.</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>The same result was found by Fistiani et al. (2017), where the combination of anthocyanin and chlorophyll increased the light absorption range. Red cabbage and teak leaves are known to contain high levels of anthocyanin and chlorophyll and are easy to obtain. The anthocyanin content in red cabbage is ≥10 g/kg DM (Echegaray et al., 2020), while the chlorophyll content in teak leaves is 62,900 mg/L (Sumiati, 2021). Both are also produced in high quantities in Indonesia, but they have not been widely utilized (Ulyatin & Ba’in, 2020).</p>
                <p className='text-white text-lg md:text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>However, according to Andari’s (2017) research, natural dyes have relatively lower efficiency compared to synthetic dyes, necessitating the addition of triphenylamine and dopants. Triphenylamine has high photovoltaic properties and can improve the performance of DSSCs (Mahmoed et al., 2022). Additionally, adding magnesium dopants through sonication can reduce the band-gap and improve stability due to the mixing of pigments in the DSSC fabrication process (Arshad et al., 2021). Therefore, in this research, a combination of anthocyanin pigment from red cabbage (Brassica oleracea) and chlorophyll pigment from teak leaves (Tectona grandis) will be used as a natural photosensitizer, along with the addition of triphenylamine and magnesium dopants to achieve optimal DSSC efficiency.</p>


                {/* CTA */}
                <div className='w-full flex justify-center md:gap-5 gap-2 text-sm mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/14x1zgvCAwcsb1vgyx9MluTTiJlJUnV55/view?usp=sharing"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1IL5BzO13UmQCkbsEEwjdfj2VFro5VWFZ/view?usp=sharing"><span>Full Text</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P7