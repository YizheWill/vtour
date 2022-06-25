import React from 'react';
import { Box } from '@mui/material';

function Header() {
  return (
    <header id='page-header'>
      <nav className='navigation background-is-dark'>
        <Box className='container'>
          <Box className='wrapper'>
            <Box className='left'>
              <a href='index-v1.html' className='brand'>
                <img src='assets/img/logo.png' alt='' />
              </a>
            </Box>
            <Box className='right'>
              <ul className='nav navigation-links animate'>
                <li>
                  <a href='#page-top' className='scroll'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' className='scroll'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#gallery' className='scroll'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='#pricing' className='scroll'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#contact' className='scroll'>
                    Contact
                  </a>
                </li>
              </ul>
              <Box className='nav-btn'>
                <figure></figure>
                <figure></figure>
                <figure></figure>
              </Box>
            </Box>
          </Box>
        </Box>
      </nav>
      <Box className='hero-section background-is-dark'>
        <Box className='wrapper'>
          <Box className='hero-title'>
            <Box className='container'>
              <h1 className='animate'>
                Get Ready.
                <br />
                We're finishing!
              </h1>
              <form className='animate' id='form-hero'>
                <label for='form-hero-email'>
                  Enter your email for the latest news
                </label>
                <Box className='row'>
                  <Box className='col-md-5 col-sm-5'>
                    <Box className='input-group'>
                      <input
                        type='email'
                        className='form-control'
                        id='form-hero-email'
                        name='email'
                        placeholder='Your email'
                        required=''
                      />
                      <span className='input-group-btn'>
                        <button className='btn' type='submit'>
                          <i className='arrow_right'></i>
                        </button>
                      </span>
                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
        <Box
          className='owl-carousel'
          data-owl-dots='0'
          data-owl-nav='1'
          data-owl-autoplay='1'
          data-owl-loop='1'
          data-owl-fadeout='1'
        >
          <Box className='hero-slide'>
            <Box className='bg-transfer'>
              <img src='assets/img/gallery-big-04.jpg' alt='' />
            </Box>
          </Box>
          <Box className='hero-slide'>
            <Box className='bg-transfer'>
              <img src='assets/img/gallery-big-01.jpg' alt='' />
            </Box>
          </Box>
          <Box className='hero-slide'>
            <Box className='bg-transfer'>
              <img src='assets/img/gallery-big-02.jpg' alt='' />
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
