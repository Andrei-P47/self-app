import React from 'react';

import {
    Header,
    SubscribeSection,
    Footer,
    Breadcrumbs,
    Hero,
    TeamAbout,
    TeamCards

} from '../components';

const Team = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero/>
            <TeamAbout/>
            <TeamCards/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Team;
