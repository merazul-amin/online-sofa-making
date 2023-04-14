import Footer from '@/components/Footer/Footer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;