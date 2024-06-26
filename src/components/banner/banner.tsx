'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <Box className="banner-container">
      <Container className="banner">
        <Box className="banner__text-container">
          <Typography variant="h1" className="banner__title page-heading">
            Be a <span className="alt-text-color">Force</span> For
            <span className="alt-text-color"> Good</span> in BC!
          </Typography>
          <Typography variant="body1" className="banner__text">
            Do you have design, writing, or coding skills? You have the power to
            elevate British Columbia to new heights through CodeForBC.
          </Typography>
          <Box className="banner__button-container">
            <Button
              className="banner__button"
              variant="outlined"
              size="large"
              href="mailto:codeforbc@gmail.com"
            >
              Become A Partner
            </Button>
            <Button
              className="banner__button"
              variant="contained"
              size="large"
              href="https://tally.so/embed/3jMe1x"
            >
              Join Us
            </Button>
          </Box>
        </Box>
        <Box className="banner__image-container">
          <Image
            src="/assets/hero-Image.png"
            alt="banner image"
            width={517}
            height={440}
            className="banner__image"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
