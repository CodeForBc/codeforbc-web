import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import './team-bio-card.scss';

interface TeamMember {
  name: string;
  job_title: string;
  bio: string;
  linkedin_link: string;
  github_link: string;
  profile_image_link: string;
}

interface TeamBioCardProps {
  data: TeamMember;
}

export default function TeamBioCard({ data }: TeamBioCardProps) {
  return (
    <Box className="member-card">
      {data.profile_image_link.length !== 0 ? (
        <Image
          className="member-card__image"
          alt="profile"
          src={data.profile_image_link}
          width={202}
          height={206}
        />
      ) : (
        <Image
          className="member-card__image"
          alt="profile"
          src="/assets/profile-image-placeholder.png"
          width={202}
          height={206}
        />
      )}
      <Box className="member-card__card-title-container">
        <Typography className="member-card__card-title">{data.name}</Typography>
        <Typography className="member-card__card-text">
          {data.job_title}
        </Typography>
      </Box>
      <Typography className="member-card__card-text">{data.bio}</Typography>
      <Box className="member-card__card-link-container">
        <IconButton className="member-card__link" href={data.linkedin_link}>
          <svg className="member-card__icon">
            <use xlinkHref={`/assets/github-linkedin-color.svg#linkedin`}></use>
          </svg>
        </IconButton>
        {data.github_link ? (
          <IconButton className="member-card__link" href={data.github_link}>
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
