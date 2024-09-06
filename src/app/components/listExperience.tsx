import React from 'react'

interface ListExperienceProps {
    title: string;
    position : string;
    place: any; 
    desc1 : string;
    desc2 : string;
    period : string;
  }
  
  const ListExperience: React.FC<ListExperienceProps> = ({title, position, place, desc1, desc2, period }) => {
    return (
        <div className="border-t border-opacity-25 border-slate-300 mt-4 flex md:flex-row flex-col items-center gap-x-10 py-4">
            <div className='rounded-full md:w-5/12 flex justify-start items-center h-52 relative'>
                <h4 className="text-3xl font-bold text-left" style={{ fontFamily: 'Baskervville SC, serif' }}>{period}</h4>
            </div>
            <div className="flex-1" style={{ fontFamily: 'Baskervville SC, serif' }}>
                <h3 className="text-3xl font-semibold capitalize">{title}</h3>
                <h4 className="text-lg font-normal font-sans capitalize"> - {position} -</h4>
                <ul className='list-disc mt-4'>
                    <li> {desc1}</li>
                    <li> {desc2}</li>
                </ul>
            </div>
        </div>
    )
}

export default ListExperience