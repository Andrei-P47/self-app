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
    Footer, Breadcrumbs, Hero, SolutionsCards

} from '../components';

const Services = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero/>
            <SolutionsCards/>
            <ContactUsSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Services;
