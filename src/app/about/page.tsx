import TeamBioCard from '@/components/team-bio-card/team-bio-card';
import { Box, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import './about.scss';
import teamMemberData from './team-member-data';

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
        {teamMemberData.map((teamMember) => (
          <TeamBioCard key={teamMember.name} data={teamMember} />
        ))}
      </Box>
      <Box className="join-us-cta-card">
        <Box className="join-us-cta-card__text-container">
          <Typography className="join-us-cta-card__title">
            Want to be a part?
          </Typography>
          <Typography className="join-us-cta-card__text">
            Contribute to Open Source Projects for BC, from Anywhere, with
            OpenBC.
          </Typography>
        </Box>
        <Button
          size="large"
          className="join-us-cta-card__button"
          variant="contained"
        >
          Join Us
        </Button>
      </Box>
    </Container>
  );
}
