import { Box } from '@mui/material';
import React from 'react';

function BriefIntro() {
  return (
    <Box className='block background-is-dark'>
      <Box className='container'>
        <Box className='row'>
          <Box className='col-md-4 col-sm-4'>
            <Box
              className='feature has-icon'
              data-scroll-reveal='enter left and move 20px'
            >
              <i className='icon'>
                <img src='assets/img/icon-white-shield.png' alt='' />
              </i>
              <Box className='description'>
                <h3>Modern & Safe Living</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ac ornare felis. Nam velit neque, blandit id placerat
                </p>
                <a href='' className='btn btn-default btn-rounded arrow'>
                  Read More
                </a>
              </Box>
            </Box>
          </Box>
          <Box className='col-md-4 col-sm-4'>
            <Box
              className='feature has-icon'
              data-scroll-reveal='enter bottom and move 20px'
            >
              <i className='icon'>
                <img src='assets/img/icon-white-pin.png' alt='' />
              </i>
              <Box className='description'>
                <h3>Peaceful Location</h3>
                <p>
                  Mauris ac ornare felis. Nam velit neque, blandit id placerat
                  eu, venenatis at purus. Nunc maximus ultrices lacus
                </p>
                <a href='' className='btn btn-default btn-rounded arrow'>
                  Read More
                </a>
              </Box>
            </Box>
          </Box>
          <Box className='col-md-4 col-sm-4'>
            <Box
              className='feature has-icon'
              data-scroll-reveal='enter right and move 20px'
            >
              <i className='icon'>
                <img src='assets/img/icon-white-wallet.png' alt='' />
              </i>
              <Box className='description'>
                <h3>Great Starting Prices</h3>
                <p>
                  Nam velit neque, blandit id placerat eu, venenatis at purus.
                  Nunc maximus ultrices lacus eu fringilla.
                </p>
                <a href='' className='btn btn-default btn-rounded arrow'>
                  Read More
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='background-wrapper'>
        <Box className='bg-transfer opacity-15'>
          <img src='assets/img/bg-01.jpg' alt='' />
        </Box>
        <Box className='background-color background-color-black'></Box>
      </Box>
    </Box>
  );
}

export default BriefIntro;
