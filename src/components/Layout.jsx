import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import FloatingLogo from './FloatingLogo';
import BackgroundDecor from './BackgroundDecor';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <BackgroundDecor />
      {/* <FloatingLogo /> */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
