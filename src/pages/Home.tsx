import { useGlobalParallax } from '@/hooks/useGlobalParallax';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Industries from '@/components/sections/Industries';
import ContactForm from '@/components/sections/ContactForm';
import CallToAction from '@/components/sections/CallToAction';



export default function Home() {
  return (
    <>
        <Hero /> 
        <About />
        <Services />
        <CallToAction />
        <Technologies />
        <Industries />
        <ContactForm />
    </>
  );
}

