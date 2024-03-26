import CoreValues from '@/components/core-values/core-values';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import { Box, Divider, Link, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import React from 'react';
import './join-us.scss';

export default function JoinUs() {
  return (
    <Container maxWidth="lg" className="container">
      <Box className="sub-container-2-col">
        <Box className="box-size-50">
          <Image
            src="https://source.unsplash.com/random?wallpapers"
            alt="Description"
            width={500}
            height={500}
            style={{ width: '100%' }}
          />
        </Box>
        <Box className="box-size-50__marginX">
          <Typography className="sub-header" variant="h2">
            Our Mission
          </Typography>
          <Typography variant="body2" paragraph>
            At CodeForBC, we&apos;re passionate about leveraging your unique
            abilities for the advancement of our province.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>
              Contribute to Open Source Projects for BC, from Anywhere, with
              CodeForBC.
            </strong>
          </Typography>
        </Box>
      </Box>
      <Box className="margin-left-4 margin-bottom-4">
        <Typography className="sub-header" variant="h5">
          Visions
        </Typography>
        <Typography variant="body2" paragraph>
          Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque
          ornare pharetra faucibs arcu. Mauris blandit egestas nibh. eu et ipsum
          amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs
          arcu. Mauris blandit egestas nibh.
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
            <Link href="mailto:&#x6f;&#x70;&#x65;&#x6e;&#x62;&#x63;&#x2e;&#x63;&#x61;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;">
              openbc.ca AT gmail.com
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
