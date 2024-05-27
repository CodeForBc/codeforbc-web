import TeamBioCard from '@/components/team-bio-card/team-bio-card';
import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import { Box, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import './about.scss';

interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  profile_image_link?: string;
}

export const metadata: Metadata = {
  title: 'About Us | CodeForBC',
  description: 'A summary of the vision and team at CodeForBC',
};

export default async function About() {
  const teamMemberData = await getTeamMemberData();

  const teamMemberJson = teamMemberData.map((teamMember: TeamMember) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: teamMember.name,
    jobTitle: teamMember.job_title,
    description: teamMember.bio || '',
    url: 'https://www.codeforbc.ca/about',
    image: teamMember.profile_image_link
      ? `https://www.codeforbc.ca${teamMember.profile_image_link}`
      : '',
    sameAs: [teamMember.linkedin_link, teamMember.github_link || ''],
  }));

  return (
    <Container maxWidth="lg" className="about-page">
      <Script id="jsonLD_team-member" type="application/ld+json">
        {JSON.stringify(teamMemberJson)}
      </Script>
      <Box className="about-page__heading-container">
        <Typography className="page-heading about-page__heading" variant="h1">
          Meet Our Team
        </Typography>
        <Typography className="about-page__text" variant="body1">
          We are volunteer developers, designers, project managers, engineers,
          marketers, organizers, strategists, and citizens committed to our
          vision, and driven by our mission.
        </Typography>
      </Box>
      <Box className="about-page__card-container">
        {teamMemberData.map((teamMember: TeamMember) => (
          <TeamBioCard key={teamMember.name} data={teamMember} />
        ))}
      </Box>
      <Box className="join-us-cta-card">
        <Box className="join-us-cta-card__text-container">
          <Typography className="join-us-cta-card__title" variant="body1">
            Want to be a part of the team?
          </Typography>
          <Typography className="join-us-cta-card__text" variant="body2">
            Contribute to Open Source Projects for BC, from Anywhere, with
            CodeForBC.
          </Typography>
        </Box>
        <Button
          size="large"
          className="join-us-cta-card__button"
          variant="contained"
          href="https://tally.so/embed/w4207A"
        >
          Join Us
        </Button>
      </Box>
    </Container>
  );
}
