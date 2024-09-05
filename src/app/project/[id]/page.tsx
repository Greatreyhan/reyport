'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Navigation from '@/app/components/navigation'
import Footer from '@/app/components/footer'
import P1 from './P1'
import P2 from './P2'

const ProjectID = () => {
    const {id} = useParams()

    const renderContent = () => {
        switch (id) {
            case '1':
                return <P1 />;
            case '2':
                return <P2 />;
            // Add more cases as needed
            default:
                return <div>Unknown Project</div>;
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