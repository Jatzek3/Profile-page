import React, { Fragment } from 'react';
import './Home.scss';

import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'

function Home() {
    return (
        <Fragment>
            <HeaderSection />
            <MainSection />
        </Fragment>
    );
}

export default Home