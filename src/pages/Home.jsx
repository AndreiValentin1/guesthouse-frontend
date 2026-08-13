import { Hero } from '../components/home/Hero';
import { Intro } from '../components/home/Intro';
import { RoomsPreview } from '../components/home/RoomsPreview';
import { Spaces } from '../components/home/Spaces';
import { FoodTeaser } from '../components/home/FoodTeaser';
import { Seasons } from '../components/home/Seasons';
import { Testimonials } from '../components/home/Testimonials';
import { LocationSection } from '../components/home/LocationSection';
import { FinalCta } from '../components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <RoomsPreview />
      <Spaces />
      <FoodTeaser />
      <Seasons />
      <Testimonials />
      <LocationSection />
      <FinalCta />
    </>
  );
}
