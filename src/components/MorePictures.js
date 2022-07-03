import { Box } from '@mui/material';
import React from 'react';

const MorePictures = () => {
  return (
    <Box className='block'>
      <Box className='container'>
        <Box className='detail left-align'>
          <Box className='title'>
            <h3 className='framed'>Architecture & Design</h3>
          </Box>
          <Box className='row'>
            <Box className='col-md-7 col-sm-7'>
              <Box
                className='gallery'
                data-scroll-reveal='enter left and move 20px after'
              >
                <Box
                  className='owl-carousel one-item-carousel'
                  data-owl-items='1'
                  data-owl-margin='0'
                  data-owl-nav='0'
                  data-owl-dots='1'
                >
                  <img src='assets/img/gallery-01.png' alt='' />
                  <img src='assets/img/gallery-02.png' alt='' />
                  <img src='assets/img/gallery-03.jpg' alt='' />
                </Box>
              </Box>
            </Box>
            <Box className='col-md-5 col-sm-5'>
              <Box
                className='description'
                data-scroll-reveal='enter right and move 20px'
              >
                <h4>High quality materials</h4>
                <p>
                  Proin orci nisl, posuere viverra erat ut, pellentesque
                  interdum urna. Curabitur eu risus convallis, auctor augue id,
                  pharetra neque. Morbi pretium neque ac varius imperdiet.
                  Aliquam sed sapien eget massa hendrerit aliquet. Integer
                  auctor vel ligula eget faucibus
                </p>
                <h4>Soundproof rooms</h4>
                <p>
                  Donec tincidunt fermentum purus, eu pharetra arcu scelerisque
                  a. Maecenas felis eros, volutpat ac justo non, imperdiet
                  porttitor lorem. Nulla suscipit mi a arcu sollicitudin, sit
                  amet
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='detail right-align'>
          <Box className='title'>
            <h3 className='framed'>Warm & Cozy Interior</h3>
          </Box>
          <Box className='row'>
            <Box className='col-md-5 col-sm-5'>
              <Box
                className='description'
                data-scroll-reveal='enter left and move 20px after'
              >
                <h4>Feel your new home</h4>
                <p>
                  Proin orci nisl, posuere viverra erat ut, pellentesque
                  interdum urna. Curabitur eu risus convallis, auctor augue id,
                  pharetra neque. Morbi pretium neque ac varius imperdiet.
                  Aliquam sed sapien eget massa hendrerit aliquet. Integer
                  auctor vel ligula eget faucibus. Donec tincidunt fermentum
                  purus, eu pharetra arcu scelerisque a. Maecenas felis eros,
                  volutpat ac justo non, imperdiet porttitor
                </p>
              </Box>
            </Box>
            <Box className='col-md-7 col-sm-7'>
              <Box
                className='gallery'
                data-scroll-reveal='enter right and move 20px'
              >
                <Box
                  className='owl-carousel one-item-carousel'
                  data-owl-items='1'
                  data-owl-margin='0'
                  data-owl-nav='0'
                  data-owl-dots='1'
                >
                  <img src='assets/img/gallery-02.jpg' alt='' />
                  <img src='assets/img/gallery-01.jpg' alt='' />
                  <img src='assets/img/image-video.jpg' alt='' />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MorePictures;
