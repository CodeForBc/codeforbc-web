import TeamBioCard from '@/components/team-bio-card/team-bio-card';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import './about.scss';

export default function About() {
  return (
    <Container maxWidth="lg" className="about-page">
      <Box className="about-page__heading-container">
        <Typography className="page-heading about-page__heading">
          Meet Our Team
        </Typography>
        <Typography className="about-page__text">
          We are volunteer developers, designers, project managers, engineers,
          marketers, organizers, strategists, and citizens committed to our
          vision, and driven by our mission.
        </Typography>
      </Box>
      <Box className="about-page__card-container">
        <TeamBioCard />
        <TeamBioCard />
        <TeamBioCard />
        <TeamBioCard />
        <TeamBioCard />
        <TeamBioCard />
      </Box>
    </Container>
  );
}
