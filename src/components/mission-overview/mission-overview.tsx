import { Box, Container, Typography, TypographyVariant } from '@mui/material';
import Image from 'next/image';
import './mission-overview.scss';

interface MissionOverviewProps {
  headerSize?: TypographyVariant;
  children?: React.ReactNode;
}

export default function MissionOverview({
  headerSize = 'h1',
  children,
}: MissionOverviewProps) {
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
          <Typography
            className="mission-overview__heading"
            variant={headerSize}
          >
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
