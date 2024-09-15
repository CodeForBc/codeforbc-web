import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import './member.scss';

interface TeamMember {
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

interface MemberPageParams {
  params: {
    team_member_id: string;
  };
}

export async function generateStaticParams() {
  const members = await getTeamMemberData();
  return members.map((member: TeamMember) => ({
    memberKey: member.member_key,
  }));
}

export default async function MemberDedicatedPage({
  params,
}: MemberPageParams) {
  const members: TeamMember[] = await getTeamMemberData();

  const currentMemberIndex = members.findIndex(
    (m) => m.member_key === params.team_member_id
  );

  if (currentMemberIndex === -1) {
    redirect('/our-team');
  }

  const member = members[currentMemberIndex];

  const prevMemberKey =
    members[(currentMemberIndex - 1 + members.length) % members.length]
      .member_key;
  const nextMemberKey =
    members[(currentMemberIndex + 1) % members.length].member_key;

  return (
    <div className="member-dedicated-page">
      <Button
        startIcon={
          <ArrowBackIosIcon className="member-dedicated-page__back-button-icon" />
        }
        className="member-dedicated-page__back-button"
        href="/our-team"
        variant="text"
      >
        Back to Team
      </Button>
      <Box className="member-dedicated-page__content-wrapper">
        <Button
          className="member-dedicated-page__slide-button"
          href={`/our-team/${prevMemberKey}`}
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
        <Container className="member-dedicated-card">
          <Box className="member-dedicated-card__image-container">
            <Typography className="member-dedicated-card__tag">
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
                  <Typography className="member-dedicated-card__name">
                    {member.name}
                  </Typography>
                  <Typography className="member-dedicated-card__title">
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
              <Typography className="member-dedicated-card__heading">
                Meet {member.name}
              </Typography>
              <Typography className="member-dedicated-card__text">
                {member.brief_descriptions || 'Biography not available.'}
              </Typography>
            </Box>
            <Box className="member-dedicated-card__text-wrapper">
              <Typography className="member-dedicated-card__heading">
                “Why did I join Code For BC?”
              </Typography>
              <Typography className="member-dedicated-card__text">
                {member.join_CodeForBC || 'No description available.'}
              </Typography>
            </Box>
          </Box>
        </Container>
        <Button
          className="member-dedicated-page__slide-button"
          href={`/our-team/${nextMemberKey}`}
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
      </Box>
    </div>
  );
}
