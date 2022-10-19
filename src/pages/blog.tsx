import React from 'react';

import {
    Header,
    ContactUsSection,
    SubscribeSection,
    Footer, Breadcrumbs, Hero,ArticlesCards,Button

} from '../components';

const Blog = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <Hero />
            <ArticlesCards/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default Blog;
