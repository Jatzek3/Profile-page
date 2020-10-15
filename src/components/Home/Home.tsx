import React from 'react';
import './Home.scss';

import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'
import SidebarSection from './SidebarSection/SidebarSection'

function Home() {
    return (
        <div>
            <HeaderSection />
            <div className="main">
                <MainSection />
                <SidebarSection />
            </div>
        </div>
    );
}

export default Home