import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <footer id='page-footer' className='block background-is-dark'>
      <Box className='container'>
        <a href='#' className='brand'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 500,
            }}
          >
            <img
              src='assets/img/logo.png'
              alt=''
              style={{ width: 40, marginRight: 10 }}
            />
            <Box pt={1}>ProperTour</Box>
          </Box>
        </a>
        <Box className='row'>
          <Box className='col-md-4 col-sm-4'>
            <p>
              Proin orci nisl, posuere viverra erat ut, pellentesque interdum
              urna. Curabitur eu risus convallis, auctor augue id, pharetra
              neque.
            </p>
          </Box>
          <Box className='col-md-8 col-sm-8'>
            <Box className='contact-data text-align-right'>
              <figure>+1 (669) 309-9373</figure>
              <a href='#'>willvirtualtour@gmail.com</a>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box className='note'>(C) 2021 All Rights Reserved</Box>
        {/* <Box className='numbers'>
          <h2>Bonus numbers.</h2>
          <Box className='row'>
            <Box className='col-md-2 col-sm-2'>
              <Box className='number'>
                <figure>54</figure>
                <p>Projects done</p>
              </Box>
            </Box>
            <Box className='col-md-2 col-sm-2'>
              <Box className='number'>
                <figure>21</figure>
                <p>Employees</p>
              </Box>
            </Box>
            <Box className='col-md-2 col-sm-2'>
              <Box className='number'>
                <figure>48</figure>
                <p>Satisfied Clients</p>
              </Box>
            </Box>
            <Box className='col-md-2 col-sm-2'>
              <Box className='number'>
                <figure>17</figure>
                <p>Prices Won</p>
              </Box>
            </Box>
          </Box>
        </Box> */}
        <Box className='to-top'>
          <a href='#page-top' className='arrow-up framed scroll'>
            <i className='arrow_up'></i>
          </a>
        </Box>
      </Box>
      <Box className='background-wrapper'>
        <Box className='bg-transfer opacity-30'>
          <img src='assets/img/footer-bg.jpg' alt='' />
        </Box>
        <Box className='background-color background-color-black'></Box>
      </Box>
    </footer>
  );
};

export default Footer;
