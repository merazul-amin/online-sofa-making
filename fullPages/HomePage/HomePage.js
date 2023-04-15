import Features from '@/components/Features/Features';
import Slider from '@/components/Slider/Slider';
import TopHeader from '@/components/TopHeader/TopHeader';
import React from 'react';
import Faq from '../Faq/Faq';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <Slider />
            <Features />
            <Faq />
        </>
    );
};

export default HomePage;