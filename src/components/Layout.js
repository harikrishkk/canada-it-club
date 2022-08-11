import React from 'react';
import AppHeader from './AppHeader';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <AppHeader />
      </div>
      <main className="pb-8 grow">{children}</main>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
}
