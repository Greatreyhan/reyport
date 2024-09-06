import React from 'react'
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ListProjectProps {
    title: string;
    subtitle : string;
    image: any; 
    desc : string;
    link : string;
  }
  
  const ListProject: React.FC<ListProjectProps> = ({title, subtitle, image, desc, link }) => {
    return (
        <div className="border-t border-opacity-25 border-slate-300 mt-4 flex md:flex-row flex-col items-center gap-x-10 py-4">
            <div className='flex justify-center md:w-5/12 w-10/12'>
                <Image
                    src={image}
                    alt="Hero"
                />
            </div>
            <div className="flex-1 md:mt-0 mt-4" style={{ fontFamily: 'Baskervville SC, serif' }}>
                <h3 className="md:text-3xl text-2xl font-semibold capitalize">{title}</h3>
                <h4 className="text-md mt-2 capitalize font-sans">{subtitle}</h4>
                <p className="mt-4 text-md text-slate-200">{desc.length <= 500 ? desc : desc.slice(0, 500) + '...'}</p>
                <a href={link} className="inline-flex items-center font-semibold mt-4 hover:text-orange-500"><span>Read More</span> <IoIosArrowRoundForward className="ml-2 text-xl" /></a>
            </div>
        </div>
    )
}

export default ListProject