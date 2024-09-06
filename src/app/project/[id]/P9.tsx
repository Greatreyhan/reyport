import React from 'react'
import Image from 'next/image'
import B9 from '/public/img/B9.jpg'
import PC9 from '/public/img/P9.png'
import { IoMdDownload } from "react-icons/io";


const P9 = () => {
    return (
        <>
            {/* Header */}
            <div>
                {/* backgroud */}
                <div className='w-full h-96 relative'>
                    <Image
                        src={B9}
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
                <h1 className='mt-8 text-5xl text-white' style={{ fontFamily: 'Baskervville SC, serif' }}>Nutrizen: Know Your Nutrition - Track Nutrients & Detect Calories</h1>
                <h2 className='text-lg my-4 font-mono text-white'>Bangkit Academy Capstone Project - Simbelmawa, Kemdikbud, Indonesia</h2>

                {/* Video */}
                <iframe
                    src="https://www.youtube.com/embed/g04s9Y07Stg?si=cy4d8IP1-phKsrKX"
                    allow="autoplay"
                    className='w-full h-96 mt-16'
                ></iframe>

                {/* Description */}
                <p className='text-white text-xl text-justify mt-16' style={{ fontFamily: 'Baskervville SC, serif' }}>The rise in unhealthy eating habits, particularly among students, has become a significant public health concern. Poor dietary choices can lead to a range of chronic diseases, including obesity, diabetes, and cardiovascular problems. Recognizing this, NutriZen aims to offer a solution by addressing the unique challenges students face in maintaining a healthy diet. NutriZen is designed to empower individuals by providing personalized food recommendations and calorie information through an intuitive and user-friendly platform, significantly improving eating patterns and overall health.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>At its core, NutriZen simplifies the process of nutrition tracking. One of the most innovative aspects of the app is the food photo scanning feature, which allows users to upload pictures of their meals and receive instant calorie estimates, eliminating the need for manual calorie counting and tedious food logging. This feature not only saves time but also makes the process more intuitive and accessible to users, especially for busy students who may find it difficult to manually log every meal. By streamlining the calorie tracking process, NutriZen ensures users stay informed about their intake without additional effort.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Furthermore, NutriZen offers personalized meal plans and reminders that cater to individual health goals, whether the objective is weight gain, loss, or maintenance. The app takes into account users' dietary preferences, ensuring that the suggested meals are aligned with their lifestyle and nutritional needs. This level of customization sets NutriZen apart from other nutrition apps that often focus solely on calorie counting without factoring in personal goals and food preferences. The result is a more holistic approach to healthy eating, providing users with a tailored guide to better nutrition.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>One of NutriZen's key differentiators is its focus on students, who often struggle to make healthy dietary choices due to busy schedules and limited access to nutritious food. While many other apps target a general audience, NutriZen addresses the specific needs of this demographic. By offering solutions that fit into a student’s fast-paced lifestyle, NutriZen ensures that healthy eating becomes more manageable, even in the face of tight deadlines, long study hours, and limited food options.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Additionally, NutriZen aims to promote public health by encouraging informed food choices. By providing users with the tools to better understand their diet, the app empowers individuals to make healthier decisions, thereby contributing to weight management and overall well-being. In this way, NutriZen not only benefits individuals but also has the potential to make a broader impact on public health.</p>
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>Although several apps and tools are available to help with calorie tracking and promoting healthy eating, few provide the comprehensive solution that NutriZen offers. While other platforms may cater to broader audiences, NutriZen’s emphasis on students, combined with its unique photo-scanning feature and personalized approach to nutrition, makes it a standout solution in the realm of health and wellness.</p>
                <Image src={PC9}
                    alt="Hero"
                    className='w-8/12 h-full mx-auto py-8' />
                <p className='text-white text-xl text-justify' style={{ fontFamily: 'Baskervville SC, serif' }}>In conclusion, NutriZen offers a practical and user-friendly solution to the growing problem of unhealthy eating patterns among students. By simplifying the calorie tracking process, offering tailored meal plans, and addressing the specific challenges students face, NutriZen has the potential to significantly improve individual health outcomes and contribute to better public health. Its unique features, combined with a focus on personalization and convenience, make NutriZen an essential tool for anyone seeking to improve their diet and maintain long-term health.</p>


                {/* CTA */}
                <div className='w-full flex justify-center gap-5 mt-8'>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1IJ2GZF4Ac1Ss7P3wZuGivpiwUAxoQq91/view?usp=sharing"><span>Project Brief</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://drive.google.com/file/d/1q6VEdlVp6dRvBb5ERcg9OPSumTSTxwQA/view?usp=sharing"><span>Go To Market</span><IoMdDownload className='ml-2' /></a>
                    <a className='bg-white font-semibold px-6 py-2 rounded-full hover:underline hover:bg-slate-100 inline-flex justify-center items-center' target="_blank" style={{ fontFamily: 'Baskervville SC, serif' }} href="https://github.com/Nutrizen-Capstone"><span>Project Program</span><IoMdDownload className='ml-2' /></a>
                </div>
            </div>
        </>
    )
}

export default P9