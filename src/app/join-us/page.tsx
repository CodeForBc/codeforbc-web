import CoreValues from '@/components/core-values/core-values';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import { Box, Button, Divider, Link, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <Container className="join-us">
      <Box className="join-us-banner">
        <Box className="join-us-banner__image-container">
          <Image
            src="https://source.unsplash.com/random?wallpapers"
            alt="Description"
            width={500}
            height={500}
            className="join-us-banner__image"
          />
        </Box>
        <Box className="join-us-banner__text-container">
          <Typography
            className="page-heading join-us__heading--primary"
            variant="h1"
          >
            Our Mission
          </Typography>
          <Typography variant="body2" paragraph className="join-us__text">
            At CodeForBC, our mission is to bring together individuals
            passionate about technology, civic engagement, and community
            development to address the unique challenges and opportunities faced
            by our province.
          </Typography>
          <Box className="join-us-banner__button-container">
            <Button
              className="join-us__button"
              variant="outlined"
              size="large"
              href="mailto:codeforbc@gmail.com"
            >
              Become A Partner
            </Button>
            <Button
              className="join-us__button"
              variant="contained"
              size="large"
              href="mailto:codeforbc@gmail.com"
            >
              Join Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="join-us__text-container">
        <Typography
          className="page-heading page-heading--secondary join-us__heading--secondary"
          variant="h2"
        >
          Visions
        </Typography>
        <Typography variant="body2" paragraph className="join-us__text">
          Envisioning British Columbia where technology and unity ignite
          sustainable progress, we&apos;re committed to empowering communities
          through innovation and collaboration for a brighter, inclusive future.
        </Typography>
      </Box>
      <Box className="box-size-40__center">
        <Box className="display-flex__space-around">
          <Link href="#" className="link-no-decorated" variant="h5">
            Volunteers
          </Link>
          <Link href="#" className="link-no-decorated" variant="h5">
            Be A Partner
          </Link>
        </Box>
        <Divider className="divider" />
      </Box>
      <Box className="sub-container-2-col">
        <Box className="box-size-50">
          <Typography className="sub-header" variant="h5">
            <strong>
              Ready to contribute to British Columbia through Open Source
              projects?
            </strong>
          </Typography>
          <Typography variant="body2" paragraph>
            Join us at CodeForBC and become a part of our active and welcoming
            community.
          </Typography>
        </Box>
        <Box className="box-size-50">
          <Box className="display-flex">
            <Paper className="square">
              <Box className="box-number">
                <Typography>1</Typography>
              </Box>
            </Paper>
            <Typography className="margin-left-1" variant="h5">
              Tell Us About Yourself
            </Typography>
          </Box>
          <Typography className="margin-left-4" variant="body2" paragraph>
            Fill out our <u>2 minute form</u> so we can help match you with
            opportunities
          </Typography>
          <Box className="display-flex">
            <Paper className="square">
              <Box className="box-number">
                <Typography>2</Typography>
              </Box>
            </Paper>
            <Typography className="margin-left-1" variant="h5">
              Onboarding
            </Typography>
          </Box>
          <Typography className="margin-left-4" variant="body2" paragraph>
            Tortor interdumd pulvinar risus. Cursus in odio aenean.
          </Typography>
          <Box className="display-flex">
            <Paper className="square">
              <Box className="box-number">
                <Typography>3</Typography>
              </Box>
            </Paper>
            <Typography className="margin-left-1" variant="h5">
              Have a question?
            </Typography>
          </Box>
          <Typography className="margin-left-4" variant="body2" paragraph>
            Find you answers in FAQ or email{' '}
            <Link href="mailto:codeforbc@gmail.com">
              codeforbc AT gmail.com
            </Link>{' '}
            with any questions or feedback.
          </Typography>
        </Box>
      </Box>
      <Typography className="sub-header" variant="h5">
        Core Values
      </Typography>
      <Box className="sub-container-2-col">
        <Box className="box-size-70">
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
        </Box>
        <Box className="box-size-30">
          <Image
            src="https://source.unsplash.com/random?wallpapers"
            alt="Description"
            width={500}
            height={500}
            style={{ width: '80%', height: '80%' }}
          />
        </Box>
      </Box>
      <Box>
        <FrequentlyAskedQuestions />
      </Box>
    </Container>
  );
}
