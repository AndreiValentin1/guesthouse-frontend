import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { LightboxProvider } from '../gallery/LightboxProvider';

export function SiteLayout() {
  return (
    <LightboxProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
