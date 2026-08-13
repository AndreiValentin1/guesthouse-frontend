import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import RoomDetail from './pages/RoomDetail';
import Experiences from './pages/Experiences';
import Gastronomy from './pages/Gastronomy';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cazare" element={<Accommodation />} />
        <Route path="/cazare/:roomSlug" element={<RoomDetail />} />
        <Route path="/experiente" element={<Experiences />} />
        <Route path="/gastronomie" element={<Gastronomy />} />
        <Route path="/despre" element={<About />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rezervare" element={<Booking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
