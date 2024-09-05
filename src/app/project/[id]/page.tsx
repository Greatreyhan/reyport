'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Navigation from '@/app/components/navigation'
import Footer from '@/app/components/footer'
import P1 from './P1'
import P2 from './P2'
import P3 from './P3'
import P4 from './P4'
import P5 from './P5'
import P6 from './P6'
import P7 from './P7'
import P8 from './P8'
import P9 from './P9'

const ProjectID = () => {
    const { id } = useParams()

    const renderContent = () => {
        switch (id) {
            case '1':
                return <P1 />;
            case '2':
                return <P2 />;
            case '3':
                return <P3 />;
            case '4':
                return <P4 />;
            case '5':
                return <P5 />;
            case '6':
                return <P6 />;
            case '7':
                return <P7 />;
            case '8':
                return <P8 />;
            case '9':
                return <P9 />;
            default:
                return <div>Wrong Project</div>;
        }
    };

    return (
        <div className='bg-black'>
            {/* navigation */}
            <Navigation />
            {renderContent()}
            <Footer />
        </div>
    )
}

export default ProjectID