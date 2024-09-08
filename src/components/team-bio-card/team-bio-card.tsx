import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import './team-bio-card.scss';

interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  profile_image_link: string;
  brief_descriptions?: string;
}

interface TeamBioCardProps {
  data: TeamMember;
}

export default function TeamBioCard({ data }: TeamBioCardProps) {
  return (
    <Box className="member-card">
      <Image
        className="member-card__image"
        alt="profile"
        src={data.profile_image_link}
        width={0}
        height={0}
      />
      <Box className="member-card__card-title-container">
        <Typography className="member-card__card-title" variant="body1">
          {data.name}
        </Typography>
        <Typography className="member-card__card-text" variant="body1">
          {data.job_title}
        </Typography>
      </Box>
      {/* <Typography className="member-card__card-text" variant="body1">
        {data.brief_descriptions}
      </Typography> */}
      <Box className="member-card__card-link-container">
        <IconButton
          className="member-card__link"
          aria-label="linkedin link"
          href={data.linkedin_link}
        >
          <svg className="member-card__icon">
            <use xlinkHref={`/assets/github-linkedin-color.svg#linkedin`}></use>
          </svg>
        </IconButton>
        {data.github_link ? (
          <IconButton
            className="member-card__link"
            aria-label="github link"
            href={data.github_link}
          >
            <svg className="member-card__icon">
              <use xlinkHref={`/assets/github-linkedin-color.svg#github`}></use>
            </svg>
          </IconButton>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
