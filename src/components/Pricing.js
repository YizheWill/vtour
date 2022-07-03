import { Box } from '@mui/material';
import React from 'react';

function Pricing() {
  return (
    <Box className='block' id='pricing'>
      <Box className='container'>
        <h2>Pricing.</h2>
        <Box className='row'>
          <Box className='pricing-boxes'>
            <Box className='col-md-3 col-sm-3'>
              <Box className='price-box description'>
                <h3>Choose a service</h3>
                <Box className='price old'>$350/3D tour</Box>
                <Box className='price'>Limited Time $100/3D tour</Box>
                <Box className='values'>
                  <figure>Matterport 3D tour</figure>
                  <figure>Professional Real Estate Photography</figure>
                  <figure>Drone photos</figure>
                  <figure>360º street view</figure>
                </Box>
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed'
                data-scroll-reveal='enter bottom and move 20px'
              >
                <h3>COMPACT</h3>
                <Box className='price old'>$200</Box>
                <Box className='price'>$100</Box>
                <Box className='values'>
                  <figure>
                    from 0m<sup>2</sup>
                  </figure>
                  <figure>
                    to 100m<sup>2</sup>
                  </figure>
                  <figure
                    className='not-available'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>free floor plan</span>
                    <i className='icon_close'></i>
                  </figure>
                  <figure>1 bed - 2 beds</figure>
                </Box>
                {/* <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  Pricing Details
                </a>
                <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box> */}
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed promoted'
                data-scroll-reveal='enter bottom and move 20px after 0.2s'
              >
                <Box className='promotion-title'>
                  <span>Most Selected</span>
                </Box>
                <h3>REGULAR</h3>
                <Box className='price old'>$250</Box>
                <Box className='price'>$200</Box>
                <Box className='values'>
                  <figure>
                    from 100m<sup>2</sup>
                  </figure>
                  <figure>
                    to 200m<sup>2</sup>
                  </figure>
                  <figure
                    className='available'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>free floor plan</span>
                    <i className='icon_close'></i>
                  </figure>
                  <figure>2 beds - 4 beds</figure>
                </Box>
                {/* <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  Pricing details
                </a>
                <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box> */}
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed'
                data-scroll-reveal='enter bottom and move 20px after 0.4s'
              >
                <h3>LARGER</h3>
                <Box className='price old'>$400</Box>
                <Box className='price'>$250</Box>
                <Box className='values'>
                  <figure>
                    from 200m<sup>2</sup>
                  </figure>
                  <figure>
                    to 300m<sup>2</sup>
                  </figure>
                  <figure
                    className='available'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>free floor plan</span>
                    <i className='icon_close'></i>
                  </figure>
                  <figure>4 beds +</figure>
                </Box>
                {/* <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  pricing details
                </a> */}
                {/* <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pricing;
