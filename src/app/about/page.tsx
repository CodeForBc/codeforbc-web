import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Metadata } from 'next';
import React from 'react';
import './about.scss';

export const metadata: Metadata = {
  title: 'About Us | CodeForBC',
  description: 'A summary of the vision and team at CodeForBC',
};

export default function About() {
  return (
    <Container maxWidth="lg" className="container">
      <Typography className="about-header" variant="h3">
        About
      </Typography>
      <Typography variant="body2" paragraph>
        CodeForBC, a community-driven initiative dedicated to harnessing the
        power of technology, collaboration, and innovation to create positive
        impacts across British Columbia, Canada. Our mission is to bring
        together individuals passionate about technology, civic engagement, and
        community development to address the unique challenges and opportunities
        faced by our province.
      </Typography>
      <Typography variant="body2" paragraph>
        <strong>
          Utilize Your Skills for the Betterment of British Columbia with
          CodeForBC
        </strong>
      </Typography>
      <Typography variant="body2" paragraph>
        Unlock the power of your skills and expertise to drive positive change
        in British Columbia through CodeForBC. At CodeForBC, we&apos;re
        passionate about leveraging your unique abilities for the advancement of
        our province. Whether you&apos;re a tech enthusiast, a creative
        visionary, or a community leader, your skills can play a crucial role in
        addressing challenges and creating opportunities.
      </Typography>
      <Typography variant="body2">
        <strong>
          Contribute to Open Source Projects for BC, from Anywhere, with
          CodeForBC
        </strong>
      </Typography>
    </Container>
  );
}
