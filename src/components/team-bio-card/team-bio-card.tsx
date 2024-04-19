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

export default function TeamBioCard() {
  return (
    <Box className="member-card">
      <Image
        className="member-card__image"
        alt="profile"
        src={'https://source.unsplash.com/random?wallpapers'}
        width={202}
        height={206}
      />
      <Box className="member-card__card-title-container">
        <Typography className="member-card__card-title">John Doe</Typography>
        <Typography className="member-card__card-text">
          Sr. Developer
        </Typography>
      </Box>
      <Typography className="member-card__card-text">
        Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
        ornare pharetra faucibs arcu. Mauris blandit
      </Typography>
      <Box className="member-card__card-link-container">
        <IconButton className="member-card__link">
          <svg className="member-card__icon">
            <use xlinkHref={`/assets/github-linkedin-color.svg#linkedin`}></use>
          </svg>
        </IconButton>
        <IconButton className="member-card__link">
          <svg className="member-card__icon">
            <use xlinkHref={`/assets/github-linkedin-color.svg#github`}></use>
          </svg>
        </IconButton>
      </Box>
    </Box>
  );
}
