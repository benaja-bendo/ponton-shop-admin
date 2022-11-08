import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import '../../assets/css/styles.css';
import '../../assets/js/scripts.js';
import '../../assets/js/fontAwesome.js';
import Navbar from './Navbar';


const MasterLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;