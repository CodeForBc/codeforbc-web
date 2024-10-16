'use client';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import './member.scss';

export interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  role: string[];
  profile_image_link: string;
  brief_descriptions?: string;
  member_key: string;
  join_CodeForBC?: string;
}

interface MemberDedicatedPageClientProps {
  member: TeamMember;
  prevMember: TeamMember;
  nextMember: TeamMember;
}

export default function MemberDedicatedPageClient({
  member,
  prevMember,
  nextMember,
}: MemberDedicatedPageClientProps) {
  const [prevHoveredMemberImage, setPrevHoveredMemberImage] = useState<
    string | null
  >(null);
  const [nextHoveredMemberImage, setNextHoveredMemberImage] = useState<
    string | null
  >(null);
  const prevMemberKey = prevMember.member_key;
  const nextMemberKey = nextMember.member_key;
  return (
    <div className="member-dedicated-page">
      <Button
        startIcon={
          <ArrowBackIosIcon className="member-dedicated-page__back-button-icon" />
        }
        className="member-dedicated-page__back-button"
        href="/our-team"
        variant="text"
        aria-label="Back to Team"
      >
        Back to Team
      </Button>
      <Box className="member-dedicated-page__content-wrapper">
        {!prevHoveredMemberImage ? (
          <Button
            className="member-dedicated-page__slide-button"
            href={`/our-team/${prevMemberKey}`}
            aria-label="Previous Member"
            onMouseEnter={() =>
              setPrevHoveredMemberImage(prevMember.profile_image_link)
            }
            onMouseLeave={() => setPrevHoveredMemberImage(null)}
          >
            <svg
              className="member-dedicated-page__slide-button-icon"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8 26.5L1.79999 14.5L13.8 2.5"
                stroke="#327CE0"
                strokeWidth="3.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        ) : (
          <Button
            className="member-dedicated-page__slide-button-hover"
            href={`/our-team/${prevMemberKey}`}
            onMouseEnter={() =>
              setPrevHoveredMemberImage(prevMember.profile_image_link)
            }
            onMouseLeave={() => setPrevHoveredMemberImage(null)}
          >
            <Image
              alt="Hovered Member Image"
              src={prevHoveredMemberImage}
              className="member-dedicated-page__slide-button-hover__image"
              width={100}
              height={100}
            />
          </Button>
        )}
        <Container className="member-dedicated-card">
          <Box className="member-dedicated-card__image-container">
            <Typography className="member-dedicated-card__tag" variant="body1">
              {member.role}
            </Typography>
            <Box className="member-dedicated-card__image-wrapper">
              <Image
                alt={`${member.name}'s profile`}
                src={member.profile_image_link}
                className="member-dedicated-card__image"
                width={300}
                height={300}
              />
              <Box className="member-dedicated-card__info-wrapper">
                <Box className="member-dedicated-card__name-wrapper">
                  <Typography
                    className="member-dedicated-card__name"
                    variant="h1"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    className="member-dedicated-card__title"
                    variant="body1"
                  >
                    {member.job_title}
                  </Typography>
                </Box>
                <Box className="member-dedicated-card__link-container">
                  {member.linkedin_link && (
                    <IconButton
                      className="member-dedicated-card__link"
                      aria-label="LinkedIn link"
                      href={member.linkedin_link}
                    >
                      <svg className="member-dedicated-card__icon">
                        <use
                          xlinkHref={`/assets/github-linkedin-color.svg#linkedin`}
                        ></use>
                      </svg>
                    </IconButton>
                  )}
                  {member.github_link && (
                    <IconButton
                      className="member-dedicated-card__link"
                      aria-label="GitHub link"
                      href={member.github_link}
                    >
                      <svg className="member-dedicated-card__icon">
                        <use
                          xlinkHref={`/assets/github-linkedin-color.svg#github`}
                        ></use>
                      </svg>
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="member-dedicated-card__text-container">
            <Box className="member-dedicated-card__text-wrapper">
              <Typography
                className="member-dedicated-card__heading"
                variant="h2"
              >
                Meet&nbsp;
                <span className="member-dedicated-card__heading member-dedicated-card__heading--highlight">
                  {member.name}
                </span>
              </Typography>
              <Typography
                className="member-dedicated-card__text"
                variant="body1"
              >
                {member.brief_descriptions || 'Biography not available.'}
              </Typography>
            </Box>
            {member.join_CodeForBC && (
              <Box className="member-dedicated-card__text-wrapper">
                <Typography
                  className="member-dedicated-card__heading"
                  variant="h2"
                >
                  “Why did I join Code For BC?”
                </Typography>
                <Typography
                  className="member-dedicated-card__text"
                  variant="body1"
                >
                  {member.join_CodeForBC}
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
        {!nextHoveredMemberImage ? (
          <Button
            className="member-dedicated-page__slide-button"
            href={`/our-team/${nextMemberKey}`}
            aria-label="Next Member"
            onMouseEnter={() =>
              setNextHoveredMemberImage(nextMember.profile_image_link)
            }
            onMouseLeave={() => setNextHoveredMemberImage(null)}
          >
            <svg
              className="member-dedicated-page__slide-button-icon"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.79999 2.5L13.8 14.5L1.79999 26.5"
                stroke="#327CE0"
                strokeWidth="3.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        ) : (
          <Button
            className="member-dedicated-page__slide-button-hover"
            href={`/our-team/${nextMemberKey}`}
            onMouseEnter={() =>
              setNextHoveredMemberImage(nextMember.profile_image_link)
            }
            onMouseLeave={() => setNextHoveredMemberImage(null)}
          >
            <Image
              alt="Hovered Member Image"
              src={nextHoveredMemberImage}
              className="member-dedicated-page__slide-button-hover__image"
              width={100}
              height={100}
            />
          </Button>
        )}
      </Box>
    </div>
  );
}
