import React from 'react';

import {
    Header,
    ContactUsSection,
    SubscribeSection,
    Footer, Breadcrumbs, Hero,Faq

} from '../components';

const Faqs = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero />
<Faq/>
            <ContactUsSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Faqs;
