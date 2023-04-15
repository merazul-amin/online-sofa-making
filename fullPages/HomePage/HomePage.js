import Features from '@/components/Features/Features';
import HomePageProducts from '@/components/HomePageProduts/HomePageProducts';
import Slider from '@/components/Slider/Slider';
import TopHeader from '@/components/TopHeader/TopHeader';
import React from 'react';
import Faq from '../Faq/Faq';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <Slider />
            <HomePageProducts />
            <Features />
            <Faq />
        </>
    );
};

export default HomePage;