'use client';

import CoreValues from '@/components/core-values/core-values';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import JoinUsTab from '@/components/join-us-tab/join-us-tab';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <>
      <Script
        id="jsonLD_join-us-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CodeForBC',
            url: 'https://www.codeforbc.ca/',
            description:
              'At CodeForBC, our mission is to bring together individuals passionate about technology, civic engagement, and community development to address the unique challenges and opportunities faced by our province.',
            sameAs: ['https://www.linkedin.com/company/code-for-bc/'],
          }),
        }}
      />
      <Box className="join-us-page">
        <Container className="join-us">
          <Box className="join-us-banner">
            <Box className="join-us-banner__image-container">
              <Image
                src="./assets/join-us-hero.png"
                alt="Description"
                width={500}
                height={500}
                className="join-us-banner__image"
              />
            </Box>
            <Box className="join-us-banner__text-container">
              <Typography
                className="page-heading join-us__heading--primary"
                variant="h1"
              >
                Our Mission
              </Typography>
              <Typography variant="body2" paragraph className="join-us__text">
                At CodeForBC, our mission is to bring together individuals
                passionate about technology, civic engagement, and community
                development to address the unique challenges and opportunities
                faced by our province.
              </Typography>
              <Box className="join-us-banner__button-container">
                <Button
                  className="join-us__button"
                  variant="outlined"
                  size="large"
                  href="mailto:codeforbc@gmail.com"
                >
                  Become A Partner
                </Button>
                <Button
                  className="join-us__button"
                  variant="contained"
                  size="large"
                  href="mailto:codeforbc@gmail.com"
                >
                  Join Us
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="join-us__text-container">
            <Typography
              className="page-heading page-heading--secondary join-us__heading--secondary"
              variant="h2"
            >
              Visions
            </Typography>
            <Typography variant="body2" paragraph className="join-us__text">
              Envisioning British Columbia where technology and unity ignite
              sustainable progress, we&apos;re committed to empowering
              communities through innovation and collaboration for a brighter,
              inclusive future.
            </Typography>
          </Box>
        </Container>
        <JoinUsTab />
        <CoreValues />
        <FrequentlyAskedQuestions />
      </Box>
    </>
  );
}
