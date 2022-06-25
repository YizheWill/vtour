import React from 'react';
import { Box } from '@mui/material';

const Modals = () => {
  return (
    <Box
      className='modal fade apartment-selector'
      id='floor-modal'
      tabindex='-1'
      role='dialog'
    >
      <Box className='modal-dialog' role='document'>
        <button
          type='button'
          className='close'
          data-dismiss='modal'
          aria-label='Close'
        >
          <i className='icon_close'></i>
        </button>
        <Box className='modal-content'>
          <Box className='modal-header'>
            <Box className='title'>
              <h4>Building A</h4>
              <h3>Floor 3</h3>
              <h1 className='modal-title'>Apartment 01</h1>
              <h2>$69,000</h2>
            </Box>
          </Box>
          <Box className='modal-body'>
            <Box className='left'>
              <ul className='nav nav-tabs' role='tablist'>
                <li role='presentation' className='active'>
                  <a
                    href='#modal-floor-plan-1'
                    aria-controls='modal-floor-plan-1'
                    role='tab'
                    data-toggle='tab'
                  >
                    Floor plan
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='#modal-gallery-1'
                    aria-controls='modal-gallery-1'
                    role='tab'
                    data-toggle='tab'
                  >
                    Gallery
                  </a>
                </li>
              </ul>
              <Box className='tab-content'>
                <Box
                  role='tabpanel'
                  className='tab-pane fade in active'
                  id='modal-floor-plan-1'
                >
                  <a href='assets/img/floor-plan.jpg' className='image-popup'>
                    <img src='assets/img/floor-plan.jpg' alt='' />
                  </a>
                  <Box className='note'>Click to zoom</Box>
                </Box>
                <Box
                  role='tabpanel'
                  className='tab-pane fade'
                  id='modal-gallery-1'
                >
                  <Box className='gallery'>
                    <Box
                      className='one-item-carousel'
                      data-owl-items='1'
                      data-owl-margin='0'
                      data-owl-nav='0'
                      data-owl-dots='1'
                    >
                      <img src='assets/img/gallery-01.jpg' alt='' />
                      <img src='assets/img/image-video.jpg' alt='' />
                      <img src='assets/img/gallery-02.jpg' alt='' />
                    </Box>
                  </Box>
                  <a
                    href='http://vimeo.com/24506451'
                    className='video-tour video-popup'
                  >
                    <i className='play-icon arrow_triangle-right'></i>Click to
                    take a video tour
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className='right'>
              <h3>Parameters</h3>
              <dl>
                <dt>Kitchen</dt>
                <dd>
                  24m<sup>2</sup>
                </dd>
                <dt>Master bedroom</dt>
                <dd>
                  58m<sup>2</sup>
                </dd>
                <dt>Balcony</dt>
                <dd>
                  67m<sup>2</sup>
                </dd>
                <dt>Toilet</dt>
                <dd>
                  20m<sup>2</sup>
                </dd>
                <dt>Living room</dt>
                <dd>
                  77m<sup>2</sup>
                </dd>
                <dt>Passage</dt>
                <dd>
                  48m<sup>2</sup>
                </dd>
              </dl>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vehicula mauris at finibus efficitur. Nulla facilisi. Proin
                sodales nibh id consequat mattis. Phasellus eu consequat nunc.
              </p>
              <hr />
              <figure>
                <a href='#' className='icon'>
                  <i className='fa fa-file-pdf-o'></i>Download PDF
                </a>
              </figure>
              <figure>
                <a href='#' className='icon'>
                  <i className='fa fa-file-image-o'></i>Download Brochure
                </a>
              </figure>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modals;
