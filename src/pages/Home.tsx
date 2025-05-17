import { useGlobalParallax } from '@/hooks/useGlobalParallax';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Web3 from '@/components/sections/Web3';
import Testimonials from '@/components/sections/IconCarousel';
import ContactForm from '@/components/sections/ContactForm';
import CallToAction from '@/components/sections/CallToAction';



export default function Home() {
  return (
    <>
        <Hero /> 
        <About />
        <Services />
        <Web3 />
        <CallToAction />
        <Testimonials />
        <ContactForm />
    </>
  );
}

