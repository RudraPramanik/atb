import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex bg-slate-100 flex-col min-h-screen '>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
