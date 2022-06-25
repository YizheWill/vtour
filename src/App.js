import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header';
import BriefIntro from './components/BriefIntro';
import About from './components/About';
import ExtraIntro from './components/ExtraIntro';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import MorePictures from './components/MorePictures';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Cooperations from './components/Cooperations';
import Footer from './components/Footer';
import Modals from './components/Modals';

function App() {
  return (
    <Box class='page-wrapper' id='page-top'>
      <Header />
      <Box className='page-wrapper' id='page-top'>
        <Box id='page-content'>
          <BriefIntro />
          <About />
          <ExtraIntro />
          <MorePictures />
          <Gallery />
          <Pricing />
          <FAQ />
          <Testimonials />

          <Contact />

          <Box className='container'>
            <hr />
          </Box>
          <Footer />
          <Cooperations />
        </Box>
      </Box>
      <Modals />
    </Box>
  );
}

export default App;
