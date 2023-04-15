import Features from '@/components/Features/Features';
import Slider from '@/components/Slider/Slider';
import TopHeader from '@/components/TopHeader/TopHeader';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <Slider />
            <Features />
        </>
    );
};

export default HomePage;