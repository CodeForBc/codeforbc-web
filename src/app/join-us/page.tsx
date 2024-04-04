'use client';

import FrequentlyAskedQuestions from '@/components/faq/faq';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Tab, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import React, { useState } from 'react';
import './join-us.scss';

export default function JoinUs() {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="join-us-page">
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
              development to address the unique challenges and opportunities
              faced by our province.
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
            through innovation and collaboration for a brighter, inclusive
            future.
          </Typography>
        </Box>
      </Container>
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
                        Our team will reach out and set up a first meeting to
                        get to know each other.
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      className="partner-tab__icon"
                    >
                      <path
                        d="M54.8771 39.3715C53.0289 37.9657 52.6694 35.328 54.0741 33.4789L58.8043 27.252C60.2093 25.4024 62.8477 25.0421 64.6973 26.4471C66.5464 27.8519 66.907 30.4896 65.5027 32.3391L60.7739 38.5672C59.3682 40.4185 56.7273 40.7788 54.8771 39.3715ZM46.0069 32.67C47.9482 34.1432 50.7163 33.7641 52.1899 31.823L57.2916 25.1032C58.7657 23.1616 58.3864 20.3926 56.4445 18.9189C54.5032 17.4456 51.7351 17.8248 50.2615 19.7659L45.1597 26.4857C43.6857 28.4273 44.065 31.1963 46.0069 32.67ZM43.8193 19.3722C44.5973 19.7517 44.9204 20.69 44.5409 21.468C44.2641 22.0355 45.0444 22.5158 45.4264 22.0131L49.0893 17.1935C50.21 15.7189 49.923 13.6149 48.4482 12.4943L47.7976 11.9999C45.9635 10.6063 43.3468 10.9636 41.9535 12.798L41.1842 13.8107C39.9573 15.426 40.5129 17.7597 42.336 18.6488L43.8193 19.3722ZM41.9874 8.61553L38.5965 6.03964C36.4446 4.40494 33.3749 4.82452 31.7406 6.97674L31.5073 7.28388C29.7629 9.58114 30.5533 12.8998 33.1461 14.1641C35.1091 15.1212 37.4749 14.5578 38.7957 12.8185L41.9874 8.61553ZM58.7573 48.3772C58.725 46.5103 57.8255 44.7648 56.3238 43.6552L37.2943 29.5938C37.1071 29.4555 36.8567 29.4381 36.6521 29.5491C36.3709 29.7018 36.2592 30.0483 36.3982 30.3364L43.9215 45.9293C44.2178 46.5434 43.9734 47.2819 43.3691 47.5979C42.7365 47.9288 41.9556 47.6701 41.6455 47.027L35.2271 33.7131C34.6084 32.4297 33.5532 31.4083 32.2503 30.8318L30.1294 29.8933C28.8189 29.3134 27.9061 28.0915 27.7218 26.6702C27.5814 25.5881 28.703 24.7857 29.6818 25.2681L32.0353 26.4278C33.0268 26.9164 34.1339 27.1216 35.2346 27.0208L37.0611 26.8535C38.4094 26.73 39.5954 25.9116 40.1892 24.6948C41.1279 22.7717 40.3294 20.4518 38.406 19.5137L29.1145 14.9818C26.4848 13.6992 23.3134 14.5004 21.6084 16.8781L14.366 26.9778C12.9143 29.0022 12.8645 31.7131 14.241 33.7895L26.4639 52.2273C27.2912 53.4752 27.622 54.9873 27.3914 56.4667L25.2824 69.9961C24.7153 73.6343 27.5287 76.9202 31.2108 76.9202H47.2812C50.5949 76.9202 53.2812 74.2339 53.2812 70.9202V60.1598C53.2812 58.8998 53.6778 57.6718 54.4148 56.65L57.628 52.1948C58.3858 51.1442 58.7831 49.8766 58.7608 48.5815L58.7573 48.3772Z"
                        fill="#1566B5"
                      />
                    </svg>
                    <Typography className="partner-tab__item-title">
                      Make An Impact
                    </Typography>
                  </Box>
                  <Box className="partner-tab__item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M66.6665 56.6665C68.5776 56.6665 70.1887 57.3332 71.4998 58.6665C72.8109 59.9998 73.4553 61.5554 73.4331 63.3332L46.6665 73.3332L24.0584 66.8737C23.6291 66.7511 23.3331 66.3587 23.3331 65.9122V37.6665C23.3331 37.1142 23.7808 36.6665 24.3331 36.6665H29.8331L54.0665 45.6332C55.7998 46.3221 56.6665 47.5665 56.6665 49.3665C56.6665 50.4109 56.2887 51.3221 55.5331 52.0998C54.7776 52.8776 53.822 53.2887 52.6665 53.3332H43.3331L38.4602 51.4675C37.9342 51.2662 37.3457 51.5387 37.1591 52.0702L36.7311 53.2895C36.5481 53.8107 36.8223 54.3815 37.3434 54.5644L43.3331 56.6665H66.6665ZM53.3331 10.7665C55.6887 8.03317 58.6887 6.6665 62.3331 6.6665C65.3554 6.6665 67.9109 7.77761 69.9998 9.99984C72.0887 12.2221 73.1998 14.7776 73.3331 17.6665C73.3331 19.9554 72.222 22.6887 69.9998 25.8665C67.7776 29.0443 65.5887 31.6998 63.4331 33.8332C61.2776 35.9665 57.9109 39.1332 53.3331 43.3332C48.7109 39.1332 45.3109 35.9665 43.1331 33.8332C40.9553 31.6998 38.7665 29.0443 36.5665 25.8665C34.3665 22.6887 33.2887 19.9554 33.3331 17.6665C33.3331 14.6443 34.4109 12.0887 36.5665 9.99984C38.722 7.91095 41.322 6.79984 44.3665 6.6665C47.922 6.6665 50.9109 8.03317 53.3331 10.7665ZM3.27979 37.6665C3.27979 37.1142 3.7275 36.6665 4.27979 36.6665H15.6665C16.2187 36.6665 16.6665 37.1142 16.6665 37.6665V72.3332C16.6665 72.8855 16.2187 73.3332 15.6665 73.3332H4.27979C3.7275 73.3332 3.27979 72.8855 3.27979 72.3332V37.6665Z"
                        fill="#1566B5"
                      />
                    </svg>
                    <Typography className="partner-tab__item-title">
                      Give Back To Your Community
                    </Typography>
                  </Box>
                  <Box className="partner-tab__item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M39.9999 8C35.7564 8 31.6868 9.68571 28.6862 12.6863C25.6856 15.6869 23.9999 19.7565 23.9999 24C23.9999 28.2435 25.6856 32.3131 28.6862 35.3137C31.6868 38.3143 35.7564 40 39.9999 40C44.2434 40 48.313 38.3143 51.3136 35.3137C54.3142 32.3131 55.9999 28.2435 55.9999 24C55.9999 19.7565 54.3142 15.6869 51.3136 12.6863C48.313 9.68571 44.2434 8 39.9999 8ZM59.4599 67.188C55.3522 69.8075 50.0972 71.3165 44.3542 71.8136C43.9141 71.8517 43.5122 71.5846 43.3058 71.1941C43.0265 70.6655 42.6688 70.1805 42.2439 69.756L34.7445 62.2604C34.4446 61.9606 34.3689 61.5051 34.5368 61.1156C35.504 58.8707 36.0029 56.4493 35.9999 54C36.0042 51.0662 35.2883 48.1861 33.9275 45.6082C33.5542 44.901 34.0418 44 34.8415 44H59.9999C62.1216 44 64.1565 44.8429 65.6568 46.3431C67.157 47.8434 67.9999 49.8783 67.9999 52C67.9999 58.764 64.6679 63.864 59.4599 67.188ZM17.9999 68C21.1439 68 24.0479 66.96 26.3839 65.212L36.5839 75.412C36.7696 75.598 36.9901 75.7455 37.2328 75.8462C37.4755 75.947 37.7357 75.9989 37.9985 75.9991C38.2613 75.9993 38.5215 75.9477 38.7644 75.8473C39.0072 75.7469 39.228 75.5997 39.4139 75.414C39.5999 75.2283 39.7474 75.0078 39.8481 74.7651C39.9489 74.5224 40.0008 74.2622 40.001 73.9994C40.0012 73.7366 39.9496 73.4764 39.8492 73.2335C39.7488 72.9907 39.6016 72.77 39.4159 72.584L29.2159 62.384C31.1039 59.8591 32.0845 56.7708 31.9987 53.6193C31.913 50.4677 30.766 47.4373 28.7435 45.0188C26.7209 42.6003 23.9413 40.9353 20.8546 40.2933C17.7679 39.6513 14.5549 40.07 11.7358 41.4816C8.91669 42.8932 6.65657 45.2149 5.32138 48.071C3.98619 50.927 3.6541 54.1502 4.37889 57.2185C5.10368 60.2868 6.8429 63.0206 9.31496 64.9773C11.787 66.9341 14.8472 67.9991 17.9999 68ZM17.9999 64C15.3477 64 12.8042 62.9464 10.9288 61.0711C9.05347 59.1957 7.9999 56.6522 7.9999 54C7.9999 51.3478 9.05347 48.8043 10.9288 46.9289C12.8042 45.0536 15.3477 44 17.9999 44C20.6521 44 23.1956 45.0536 25.071 46.9289C26.9463 48.8043 27.9999 51.3478 27.9999 54C27.9999 56.6522 26.9463 59.1957 25.071 61.0711C23.1956 62.9464 20.6521 64 17.9999 64Z"
                        fill="#1566B5"
                      />
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
      <FrequentlyAskedQuestions />
    </Box>
  );
}
