import HeroSection from "./components/sections/heroSection";
import AboutSection from "./components/sections/aboutSection"
import OffersSection from "./components/sections/offersSection";
import ServicesSection from "./components/sections/servicesSection";
import ContactSection from "./components/sections/contactSection";
import Nav from "./components/nav"
import Footer from "./components/footer";
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
      <ContactSection/>
      <Footer
        links={navLinksHome}
      />
    </>
  );
}
