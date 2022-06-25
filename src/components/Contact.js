import { Box } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Box className='block' id='contact'>
      <Box className='container'>
        <h2>Contact.</h2>
        <Box className='contact map'>
          <Box className='row'>
            <Box
              className='col-md-6 col-sm-6'
              data-scroll-reveal='enter bottom and move 20px'
            >
              <h3>Map</h3>
              <Box className='map' id='map'></Box>
              <Box className='row'>
                <Box className='col-md-6 col-sm-6'>
                  <h3>Address</h3>
                  <address>
                    Your Company
                    <br />
                    4877 Spruce Drive
                    <br />
                    West Newton, PA 15089
                    <br />
                    <br />
                    +1 (734) 123-4567
                    <br />
                    <a href='#'>hello@example.com</a>
                  </address>
                </Box>
                <Box className='col-md-6 col-sm-6'>
                  <h3>Social</h3>
                  <Box className='social'>
                    <a href='#' className='roll-effect'>
                      <i className='social_facebook_circle'></i>Facebook
                    </a>
                    <a href='#'>
                      <i className='social_twitter_circle'></i>Twitter
                    </a>
                    <a href='#'>
                      <i className='social_instagram_circle'></i>Instagram
                    </a>
                    <a href='#'>
                      <i className='social_skype_circle'></i>Skype
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className='col-md-6 col-sm-6'
              data-scroll-reveal='enter top and move 20px'
            >
              <h3>Contact form</h3>
              <form
                id='form-contact'
                method='post'
                className='clearfix inputs-underline'
              >
                <Box className='row'>
                  <Box className='col-md-6 col-sm-6'>
                    <Box className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='form-contact-name'
                        name='name'
                        placeholder='Your Name'
                        required
                      />
                    </Box>
                  </Box>
                  <Box className='col-md-6 col-sm-6'>
                    <Box className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        id='form-contact-email'
                        name='email'
                        placeholder='Your Email'
                        required
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className='row'>
                  <Box className='col-md-12'>
                    <Box className='form-group'>
                      <textarea
                        className='form-control'
                        id='form-contact-message'
                        rows='8'
                        name='message'
                        placeholder='Your Message'
                        required
                      ></textarea>
                    </Box>
                  </Box>
                </Box>
                <Box className='form-group clearfix'>
                  <button
                    type='submit'
                    className='btn pull-right btn-primary btn-rounded'
                    id='form-contact-submit'
                  >
                    Send a Message
                  </button>
                </Box>
                <Box id='form-contact-status'></Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
