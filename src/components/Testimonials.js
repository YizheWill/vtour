import { Box } from '@mui/material';
import React from 'react';

const Testimonials = () => {
  return (
    <Box className='container'>
      <Box className='block background-is-dark'>
        <Box className='testimonials'>
          <Box className='row'>
            <Box className='col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1'>
              <Box className='owl-carousel' data-owl-nav='0' data-owl-dots='1'>
                <blockquote>
                  <p>
                    Sed vel lorem et velit dictum rhoncus eget sed orci.
                    Vestibulum ante ipsum primis in faucibus orci luctus et.
                  </p>
                  <footer>
                    John Doe
                    <figure>River Side Apartments</figure>
                  </footer>
                </blockquote>
                <blockquote>
                  <p>
                    Ut ornare in dolor sit amet mollis. Aliquam molestie
                    venenatis mi in efficitur. Lorem ipsum dolor sit amet
                  </p>
                  <footer>
                    Peter Brown
                    <figure>LTJ Investments</figure>
                  </footer>
                </blockquote>
                <blockquote>
                  <p>
                    Quisque eleifend tempor odio, sit amet maximus tortor
                    hendrerit sollicitudin. Quisque mollis non justo id bibendum
                  </p>
                  <footer>
                    Suzane J. Bright
                    <figure>Archits Company</figure>
                  </footer>
                </blockquote>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='background-wrapper'>
          <Box className='bg-transfer opacity-15'>
            <img src='assets/img/gallery-big-01.jpg' alt='' />
          </Box>
          <Box className='background-color background-color-black'></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
