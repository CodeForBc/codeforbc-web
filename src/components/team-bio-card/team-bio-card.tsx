import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import './team-bio-card.scss';

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
          <Image
            src="/assets/linkedin_Icon.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </IconButton>
        <IconButton className="member-card__link">
          <Image
            src="/assets/github_Icon.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
