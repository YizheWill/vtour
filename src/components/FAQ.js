import { Box } from '@mui/material';
import React from 'react';

const FAQ = () => {
  return (
    <Box className='block'>
      <Box className='container'>
        <h2>FAQ.</h2>
        <Box className='row'>
          <Box className='col-md-8 col-sm-8 equal-height'>
            <Box
              className='panel-group background-solid'
              id='faq'
              role='tablist'
              aria-multiselectable='true'
              data-scroll-reveal='enter left and move 20px after'
            >
              <Box className='panel panel-default'>
                <Box className='panel-heading' role='tab' id='faq1'>
                  <h4 className='panel-title'>
                    <a
                      role='button'
                      data-toggle='collapse'
                      data-parent='#faq'
                      href='#answer1'
                      aria-expanded='true'
                      aria-controls='answer1'
                    >
                      Quite and peaceful location near the nature
                    </a>
                  </h4>
                </Box>
                <Box
                  id='answer1'
                  className='panel-collapse collapse in'
                  role='tabpanel'
                  aria-labelledby='faq1'
                >
                  <Box className='panel-body'>
                    <p>
                      Nunc vel erat eget dolor lobortis venenatis eget in nulla.
                      Aliquam sodales elit in augue finibus, at sagittis enim
                      vestibulum. Vivamus varius, velit sollicitudin interdum
                      cursus, augue purus dignissim quam, dictum commodo lorem
                      ante quis neque. Etiam massa erat, tristique id semper ac,
                      placerat ac magna.
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className='panel panel-default'>
                <Box className='panel-heading' role='tab' id='faq2'>
                  <h4 className='panel-title'>
                    <a
                      role='button'
                      data-toggle='collapse'
                      data-parent='#faq'
                      href='#answer2'
                      aria-expanded='true'
                      aria-controls='answer2'
                    >
                      Shopping and fitness center right inside the complex
                    </a>
                  </h4>
                </Box>
                <Box
                  id='answer2'
                  className='panel-collapse collapse'
                  role='tabpanel'
                  aria-labelledby='faq2'
                >
                  <Box className='panel-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer dapibus elit nibh, id scelerisque tortor ornare
                      at. Maecenas finibus purus id massa viverra, a commodo
                      enim imperdiet. Donec ac magna non nisi hendrerit
                      facilisis. In a nisl mi. Fusce vulputate sodales laoreet.
                      Phasellus et urna risus.
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className='panel panel-default'>
                <Box className='panel-heading' role='tab' id='faq3'>
                  <h4 className='panel-title'>
                    <a
                      role='button'
                      data-toggle='collapse'
                      data-parent='#faq'
                      href='#answer3'
                      aria-expanded='true'
                      aria-controls='answer3'
                    >
                      Lot of parking places, even for your visitors
                    </a>
                  </h4>
                </Box>
                <Box
                  id='answer3'
                  className='panel-collapse collapse'
                  role='tabpanel'
                  aria-labelledby='faq3'
                >
                  <Box className='panel-body'>
                    <p>
                      Donec ut pellentesque nunc. Maecenas malesuada et eros sed
                      tristique. Cras condimentum in ligula ac efficitur.
                      Vestibulum tempor leo nec molestie bibendum. Maecenas
                      molestie ligula id efficitur venenatis. Maecenas venenatis
                      mauris in erat imperdiet, et suscipit ipsum pretium.
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='col-md-4 col-sm-4 equal-height'>
            <Box
              className='framed vertical-aligned-wrapper'
              data-scroll-reveal='enter right and move 20px'
            >
              <form className='inputs-underline vertical-aligned-element middle'>
                <label>
                  Subscribe to our newsletter to get the latest information
                </label>
                <Box className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='email'
                    placeholder='Your email'
                  />
                  <span className='input-group-btn'>
                    <button className='btn' type='submit'>
                      <i className='arrow_right'></i>
                    </button>
                  </span>
                </Box>
                <p className='note'>*Only relevant information, no spam</p>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
