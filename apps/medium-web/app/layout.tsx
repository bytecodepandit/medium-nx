'use client'
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import './global.css';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Layout = false ? PrivateLayout : PublicLayout;
  return (
    <html lang="en">
      <body>
        <Layout>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Layout>
      </body>
    </html>
  );
}
