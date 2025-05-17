import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Web3 from '@/pages/Web3';

function App() {
  

    return (
    <BrowserRouter>
      <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/web3" element={<Web3/>} />
          <Route path="/services" element={<Services/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
