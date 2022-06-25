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
                <h3>Choose your apartment</h3>
                <Box className='price old'>Old price</Box>
                <Box className='price'>New price</Box>
                <Box className='values'>
                  <figure>Apartment area</figure>
                  <figure>Balcony area</figure>
                  <figure>Parking place</figure>
                  <figure>Free apartments</figure>
                </Box>
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed'
                data-scroll-reveal='enter bottom and move 20px'
              >
                <h3>2 Room Apartment</h3>
                <Box className='price old'>$99,000</Box>
                <Box className='price'>$79,000</Box>
                <Box className='values'>
                  <figure>
                    83m<sup>2</sup>
                  </figure>
                  <figure>
                    26m<sup>2</sup>
                  </figure>
                  <figure className='not-available'>
                    <i className='icon_close'></i>
                  </figure>
                  <figure>12</figure>
                </Box>
                <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  Apartment Details
                </a>
                <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed promoted'
                data-scroll-reveal='enter bottom and move 20px after 0.2s'
              >
                <Box className='promotion-title'>
                  <span>Best value for money</span>
                </Box>
                <h3>3 Room Apartment</h3>
                <Box className='price old'>$99,000</Box>
                <Box className='price'>$79,000</Box>
                <Box className='values'>
                  <figure>
                    135m<sup>2</sup>
                  </figure>
                  <figure>
                    45m<sup>2</sup>
                  </figure>
                  <figure className='available'>
                    <i className='icon_check'></i>
                  </figure>
                  <figure>7</figure>
                </Box>
                <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  Apartment Details
                </a>
                <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className='col-md-3 col-sm-3'>
              <Box
                className='price-box framed'
                data-scroll-reveal='enter bottom and move 20px after 0.4s'
              >
                <h3>4 Room Apartment</h3>
                <Box className='price old'>$129,000</Box>
                <Box className='price'>$109,000</Box>
                <Box className='values'>
                  <figure>
                    198m<sup>2</sup>
                  </figure>
                  <figure>
                    67m<sup>2</sup>
                  </figure>
                  <figure className='available'>
                    <i className='icon_check'></i>
                  </figure>
                  <figure>9</figure>
                </Box>
                <a
                  href='#'
                  className='btn btn-rounded btn-framed btn-light-frame btn-primary'
                  data-toggle='modal'
                  data-target='#floor-modal'
                >
                  Apartment Details
                </a>
                <Box className='price-box-footer'>
                  <a href='' className='btn btn-rounded btn-primary'>
                    Contact us
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pricing;
