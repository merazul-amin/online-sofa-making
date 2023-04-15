import Footer from '@/components/Footer/Footer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-gray-200 via-pink-200 to-gray-200'>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;