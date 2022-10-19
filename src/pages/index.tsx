import React from 'react';

import {
    FirstBlock,
    Header,
    FeatureSection,
    CompanyOverview,
    BenefitsBlock,
    TestimonialsBlock,
    OurPricingBlock,
    OurBlogBlock,
    ContactUsSection,
    SubscribeSection,
    Footer, LogosSlider

} from '../components';

// import TestimonialsBlock from "../components/TestimonialsBlock";

const Home = () => {
    return (
        <div>
            <Header />
            <FirstBlock/>
            <FeatureSection/>
            <CompanyOverview/>
            <LogosSlider/>
            <BenefitsBlock/>
            <TestimonialsBlock/>
            <OurPricingBlock/>
            <OurBlogBlock/>
            <ContactUsSection/>

            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Home;
