import React from 'react';
import Image from 'next/image';

import {
    Header,
    ContactUsSection,
    SubscribeSection,
    Footer,
    LogosSlider, Breadcrumbs, Hero, TestimonialsBlock, AdvantagesCards

} from '../components';
import CompanyOverview from "../components/CompanyOverview";

const About = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero/>
            <div className="mt-[46px] xs:mt-[90px] xs:w-full w-[360px] h-[230px] xs:h-[590px] relative">
                <Image
                    src={'/img_10.jpg'}
                    alt={'first block image'}
                    layout={'fill'}
                    objectPosition={'center'}
                />
            </div>
            <CompanyOverview/>
            <AdvantagesCards/>
            <TestimonialsBlock/>
            <LogosSlider/>
            <ContactUsSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default About;
