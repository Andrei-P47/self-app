import React from 'react';

import {
    Header,
    TestimonialsBlock,
    ContactUsSection,
    SubscribeSection,
    Footer,
    SolutionsCards,
    AdvantagesSection,
    Hero,
    Breadcrumbs

} from '../components';

const Solutions = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero />
            <SolutionsCards/>
            <AdvantagesSection/>
            <TestimonialsBlock/>
            <ContactUsSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Solutions;
