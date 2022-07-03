import { Box } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Box className='block' id='about'>
      <Box className='container'>
        <h2>About the project.</h2>
        <Box className='row'>
          <Box className='col-md-6 col-sm-6'>
            <h3>Place where you find yourself</h3>
            <p>
              Nam in sodales massa. Donec at ullamcorper diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Vivamus et ornare leo, a commodo tellus.
              Suspendisse potenti. Ut posuere viverra lectus non scelerisque.
            </p>
            <ul className='check-marks'>
              <li>Quite and peaceful location near the nature</li>
              <li>Shopping and fitness center right inside the complex</li>
              <li>Lot of parking places, even for your visitors</li>
              <li>Many play areas for your kids</li>
            </ul>
          </Box>
          <Box className='col-md-6 col-sm-6'>
            <h3>Demo Project</h3>
            {/* <a
              href='http://vimeo.com/24506451'
              className='video-player video-popup'
              data-scroll-reveal='enter bottom and move 50px'
            > */}
            {/* <i className='play-icon arrow_triangle-right'></i> */}
            <Box className='has-overlay'>
              <img src='assets/img/image-video.jpg' alt='' />
            </Box>
            {/* </a> */}
            <figure className='note'>
              Let’s check the benefits of this project from the architect
            </figure>
          </Box>
        </Box>
      </Box>
      <Box className='background-wrapper'>
        <Box className='background-color background-color-black opacity-5'></Box>
      </Box>
    </Box>
  );
}

export default About;
