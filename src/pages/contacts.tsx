import React from 'react';

import {
    Header,
    Footer,
    Breadcrumbs,
    Map,
    ContactForm

} from '../components';

const Contacts = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs/>
            <ContactForm/>
            <Map/>
            <Footer/>
        </div>
    );
};

export default Contacts;
