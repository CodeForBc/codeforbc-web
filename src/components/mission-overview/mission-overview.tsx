import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import './mission-overview.scss';

export default function MissionOverview() {
  return (
    <Container className="mission-overview-container">
      <Box className="mission-overview">
        <Box className="mission-overview__image-container">
          <Image
            src="/assets/join-us-hero.png"
            alt="Description"
            width={512}
            height={467}
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
          <Button
            className="mission-overview__button"
            variant="outlined"
            size="large"
            href="/join-us"
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
