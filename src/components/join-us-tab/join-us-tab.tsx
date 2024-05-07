import TabOptionsEnum from '@/enum/tab-options-enum';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Container,
  Tab,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { partnerTabData, volunteerTabData } from './join-us-tab-data';
import './join-us-tab.scss';

export default function JoinUsTab() {
  const [value, setValue] = useState<TabOptionsEnum>(TabOptionsEnum.volunteers);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: TabOptionsEnum
  ) => {
    setValue(newValue);
  };

  const smallScreen = useMediaQuery('(max-width: 786px)');

  return (
    <Box className="join-us-tab-section">
      <Container className="join-us-tab">
        <TabContext value={value}>
          <Box className="join-us-tab__header-container">
            <Box className="join-us-tab__header">
              <TabList
                orientation={smallScreen ? 'vertical' : 'horizontal'}
                onChange={handleChange}
                centered={true}
                indicatorColor="primary"
                variant={smallScreen ? 'fullWidth' : 'standard'}
              >
                <Tab
                  className="join-us-tab__button"
                  label="Volunteers"
                  value="Volunteers"
                />
                <Tab
                  className="join-us-tab__button"
                  label="Become A Partner"
                  value="Become A Partner"
                />
              </TabList>
            </Box>
          </Box>
          <TabPanel value="Volunteers">
            <Box className="volunteer-tab">
              <Box className="volunteer-tab__heading-container">
                <Typography className="volunteer-tab__heading" variant="h3">
                  Ready to contribute to British Columbia through Open source
                  projects?
                </Typography>
                <Typography
                  className="volunteer-tab__sub-heading"
                  variant="body2"
                >
                  Join us at CodeForBC and become a part of our active and
                  welcoming community.
                </Typography>
              </Box>
              <Box className="volunteer-tab__list-container">
                {volunteerTabData.map((volunteerTabItem, index) => (
                  <Box key={index} className="volunteer-tab__item">
                    <Typography
                      className="volunteer-tab__item-number"
                      variant="body2"
                    >
                      {index + 1}
                    </Typography>
                    <Box className="volunteer-tab__item-text-container">
                      <Typography
                        className="volunteer-tab__item-heading"
                        variant="h4"
                      >
                        {volunteerTabItem.title}
                      </Typography>
                      <Typography
                        className="volunteer-tab__item-text"
                        variant="body2"
                      >
                        {volunteerTabItem.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="Become A Partner">
            <Box className="partner-tab">
              <Box className="partner-tab__heading-container">
                <Typography className="partner-tab__heading" variant="h3">
                  Partner With Us
                </Typography>
                <Typography
                  className="partner-tab__sub-heading"
                  variant="body1"
                >
                  Let’s improve British Columbia in meaningful ways
                </Typography>
              </Box>
              <Box className="partner-tab__item-container">
                {partnerTabData.map((partnerTabItem) => (
                  <Box
                    key={partnerTabItem.icon_id}
                    className="partner-tab__item"
                  >
                    <svg className="partner-tab__icon">
                      <use
                        xlinkHref={`/assets/partner-sprite.svg#${partnerTabItem.icon_id}`}
                      ></use>
                    </svg>

                    <Typography
                      className="partner-tab__item-title"
                      variant="h4"
                    >
                      {partnerTabItem.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                className="partner-tab__button"
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
