'use client';
import TeamBioCard from '@/components/team-bio-card/team-bio-card';
import {
  Box,
  Button,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import Script from 'next/script';
import React, { useState } from 'react';
import './about.scss';

interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  role: string[];
  profile_image_link: string;
  brief_descriptions?: string;
}

interface AboutPageProps {
  teamMemberData: TeamMember[];
}

export default function About({ teamMemberData }: AboutPageProps) {
  const [filter, setFilter] = useState<string>('All Members');
  const [page, setPage] = useState<number>(1);
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

  const filterMembers = (role: string) => {
    if (role === 'All Members') return teamMemberData;
    return teamMemberData.filter((member) => member.role.includes(role));
  };

  const filteredMembers = filterMembers(filter);

  const displayedMembers = filteredMembers.slice((page - 1) * 6, page * 6);
  const totalPages = Math.ceil(filteredMembers.length / 6);

  const formatPageNumber = (number: number | null) => {
    if (number === null) return '00';
    return number.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  };

  return (
    <Container className="about-page">
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
      <Box className="about-page__content-container">
        <Box className="about-page__filter">
          {[
            'All Members',
            'Executive',
            'Product/UIUX',
            'Developers',
            'Business Development',
            'Data',
          ].map((role) => (
            <Button
              key={role}
              className={`about-page__filter-button ${filter === role ? 'about-page__filter-button--active' : ''}`}
              onClick={() => {
                setFilter(role);
                setPage(1);
              }}
            >
              {role}
            </Button>
          ))}
        </Box>
        <Box className="about-page__content-wrapper">
          <Box className="about-page__card-container">
            {displayedMembers.map((teamMember: TeamMember) => (
              <TeamBioCard key={teamMember.name} data={teamMember} />
            ))}
          </Box>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            className="about-page__pagination"
            variant="text"
            size="large"
            color="primary"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                page={
                  item.type === 'page' && item.page !== null
                    ? formatPageNumber(item.page)
                    : item.page
                }
              />
            )}
          />
        </Box>
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
          href="https://tally.so/embed/3jMe1x"
        >
          Join Us
        </Button>
      </Box>
    </Container>
  );
}
