import HeroSection from "./components/sections/heroSection";
import AboutSection from "./components/sections/aboutSection"
import OffersSection from "./components/sections/offersSection";
import ServicesSection from "./components/sections/servicesSection";
import LocationSection from "./components/sections/locationSection";
import Nav from "./components/nav"
import { navLinksHome } from "./types/types";

export default function Home() {
  return (
    <>
      <Nav
        links={navLinksHome}
      />
      <HeroSection/>
      <AboutSection/>
      <OffersSection/>
      <ServicesSection/>
      <LocationSection/>
    </>
  );
}
