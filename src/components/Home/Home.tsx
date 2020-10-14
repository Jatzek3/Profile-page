import React from 'react';
import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'
import SidebarSection from './SidebarSection/SidebarSection'

function Home() {
    return (
        <div>
            <HeaderSection />
            <MainSection />
            <SidebarSection />
        </div>
    );
}

export default Home