import { Header, LoginModal } from '@medium/components';
import React from 'react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Header />
      <div className="bb ah"></div>
      {children}
      {/* {showModal && <LoginModal />} */}
    </React.Fragment>
  );
}
