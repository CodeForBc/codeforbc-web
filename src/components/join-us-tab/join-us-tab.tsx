import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Container, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import './join-us-tab.scss';

export default function JoinUsTab() {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="join-us-tab-section">
      <Container className="join-us-tab">
        <TabContext value={value}>
          <Box className="join-us-tab__header-container">
            <Box className="join-us-tab__header">
              <TabList
                onChange={handleChange}
                centered
                indicatorColor="primary"
              >
                <Tab
                  className="join-us-tab__button"
                  label="Volunteers"
                  value="1"
                />
                <Tab
                  className="join-us-tab__button"
                  label="Become A Partner"
                  value="2"
                />
              </TabList>
            </Box>
          </Box>
          <TabPanel value="1">
            <Box className="volunteer-tab">
              <Box className="volunteer-tab__heading-container">
                <Typography className="volunteer-tab__heading" variant="h3">
                  Ready to contribute to British Columbia through Open source
                  projects?
                </Typography>
                <Typography className="volunteer-tab__sub-heading">
                  Join us at CodeForBC and become a part of our active and
                  welcoming community.
                </Typography>
              </Box>
              <Box className="volunteer-tab__list-container">
                <Box className="volunteer-tab__item">
                  <Typography className="volunteer-tab__item-number">
                    1
                  </Typography>
                  <Box className="volunteer-tab__item-text-container">
                    <Typography className="volunteer-tab__item-heading">
                      Tell Us About Yourself
                    </Typography>
                    <Typography className="volunteer-tab__item-text">
                      Fill out our 2 minute form so we can help match you with
                      opportunities.
                    </Typography>
                  </Box>
                </Box>
                <Box className="volunteer-tab__item">
                  <Typography className="volunteer-tab__item-number">
                    2
                  </Typography>
                  <Box className="volunteer-tab__item-text-container">
                    <Typography className="volunteer-tab__item-heading">
                      Onboarding
                    </Typography>
                    <Typography className="volunteer-tab__item-text">
                      Our team will reach out and set up a first meeting to get
                      to know each other.
                    </Typography>
                  </Box>
                </Box>
                <Box className="volunteer-tab__item">
                  <Typography className="volunteer-tab__item-number">
                    3
                  </Typography>
                  <Box className="volunteer-tab__item-text-container">
                    <Typography className="volunteer-tab__item-heading">
                      Have Questions?
                    </Typography>
                    <Typography className="volunteer-tab__item-text">
                      Find you answers in FAQ or email codeforbc.ca@gmail.com
                      with any questions or feedback.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box className="partner-tab">
              <Box className="partner-tab__heading-container">
                <Typography className="partner-tab__heading">
                  Partner With Us
                </Typography>
                <Typography className="partner-tab__sub-heading">
                  Let’s improve British Columbia in meaningful ways
                </Typography>
              </Box>
              <Box className="partner-tab__item-container">
                <Box className="partner-tab__item">
                  <svg className="partner-tab__icon">
                    <use xlinkHref="/assets/partner-sprite.svg#Make An Impact"></use>
                  </svg>

                  <Typography className="partner-tab__item-title">
                    Make An Impact
                  </Typography>
                </Box>
                <Box className="partner-tab__item">
                  <svg className="partner-tab__icon">
                    <use xlinkHref="/assets/partner-sprite.svg#Community"></use>
                  </svg>
                  <Typography className="partner-tab__item-title">
                    Give Back To Your Community
                  </Typography>
                </Box>
                <Box className="partner-tab__item">
                  <svg className="partner-tab__icon">
                    <use xlinkHref="/assets/partner-sprite.svg#fluent"></use>
                  </svg>
                  <Typography className="partner-tab__item-title">
                    Attract Talents
                  </Typography>
                </Box>
              </Box>
              <Button
                className="banner__button"
                variant="contained"
                size="large"
                href="mailto:codeforbc@gmail.com"
              >
                Become A Partner
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}
