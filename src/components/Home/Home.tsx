import React from 'react';
import './Home.scss';

import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'

function Home() {
    return (
        <div>
            <HeaderSection />
            <MainSection />
        </div>
    );
}

export default Home