import Footer from '@/components/Footer/Footer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-gray-200 via-pink-200 to-gray-200'>
            <NavigationBar />
            <div style={{ maxWidth: '1500px', margin: 'auto' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;