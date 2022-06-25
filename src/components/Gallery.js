import { Box } from '@mui/material';
import React from 'react';

const Gallery = () => {
  return (
    <Box className='block' id='gallery'>
      <Box className='container'>
        <h2>Gallery.</h2>
      </Box>
      <Box
        className='owl-carousel big-gallery'
        data-owl-items='3'
        data-owl-auto-width='1'
        data-owl-nav='1'
        data-owl-dots='0'
        data-owl-center='1'
        data-owl-loop='1'
        data-owl-nav-container='#big-gallery-nav'
      >
        <Box className='slide'>
          <Box className='container'>
            <img src='assets/img/gallery-big-01.jpg' alt='' />
            <Box className='description'>
              <h3 className='framed'>Front View</h3>
            </Box>
          </Box>
        </Box>
        <Box className='slide'>
          <Box className='container'>
            <img src='assets/img/gallery-big-02.jpg' alt='' />
            <Box className='description'>
              <h3 className='framed'>Garage</h3>
            </Box>
          </Box>
        </Box>
        <Box className='slide'>
          <Box className='container'>
            <img src='assets/img/gallery-big-03.jpg' alt='' />
            <Box className='description'>
              <h3 className='framed'>Back View</h3>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='container'>
        <Box className='owl-nav-wrapper'>
          <Box className='owl-nav' id='big-gallery-nav'></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
