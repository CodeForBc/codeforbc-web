'use client';

import CoreValues from '@/components/core-values/core-values';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import JoinUsTab from '@/components/join-us-tab/join-us-tab';
import MissionOverview from '@/components/mission-overview/mission-overview';
import { Box, Button, Container, Typography } from '@mui/material';
import Script from 'next/script';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <>
      <Script id="jsonLD_join-us-page" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'CodeForBC',
          url: 'https://www.codeforbc.ca/',
          description:
            'At CodeForBC, our mission is to bring together individuals passionate about technology, civic engagement, and community development to address the unique challenges and opportunities faced by our province.',
          sameAs: ['https://www.linkedin.com/company/code-for-bc/'],
        })}
      </Script>
      <MissionOverview>
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
          href="https://tally.so/embed/w4207A"
        >
          Join Us
        </Button>
      </MissionOverview>
      <Box className="join-us-page">
        <Container className="join-us">
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
