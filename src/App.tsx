import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Services />
        <CallToAction/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
