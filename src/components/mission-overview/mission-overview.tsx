import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import './mission-overview.scss';

interface MissionOverviewProps {
  children?: React.ReactNode;
}

export default function MissionOverview({ children }: MissionOverviewProps) {
  return (
    <Container className="mission-overview-container">
      <Box className="mission-overview">
        <Box className="mission-overview__image-container">
          <Image
            src="/assets/join-us-hero.png"
            alt="Description"
            width={544}
            height={543}
            className="mission-overview__image"
          />
        </Box>
        <Box className="mission-overview__text-container">
          <Typography className="mission-overview__heading" variant="h2">
            Our Mission
          </Typography>
          <Typography
            variant="body2"
            paragraph
            className="mission-overview__text"
          >
            At CodeForBC, our mission is to bring together individuals
            passionate about technology, civic engagement, and community
            development to address the unique challenges and opportunities faced
            by our province.
          </Typography>
          <Box className="mission-overview__button-container">{children}</Box>
        </Box>
      </Box>
    </Container>
  );
}
