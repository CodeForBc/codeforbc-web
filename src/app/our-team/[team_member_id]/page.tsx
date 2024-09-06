import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import './member.scss';

export default function MemberDedicatedPage() {
  return (
    <div className="member-dedicated-page">
      <Button
        startIcon={
          <ArrowBackIosIcon className="member-dedicated-page__back-button-icon" />
        }
        className="member-dedicated-page__back-button"
        href="/our-team"
        variant="text"
      >
        Back to Team
      </Button>
      <Box className="member-dedicated-page__content-wrapper">
        <Button className="member-dedicated-page__slide-button">
          <svg
            className="member-dedicated-page__slide-button-icon"
            viewBox="0 0 16 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8 26.5L1.79999 14.5L13.8 2.5"
              stroke="#327CE0"
              stroke-width="3.34"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <Container className="member-dedicated-card">
          <Box className="member-dedicated-card__image-container">
            <Typography className="member-dedicated-card__tag">
              Developer
            </Typography>
            <Box className="member-dedicated-card__image-wrapper">
              <Image
                alt="profile"
                src="/assets/team-members/sam_huo.jpeg"
                className="member-dedicated-card__image"
                width={0}
                height={0}
              ></Image>
              <Box className="member-dedicated-card__info-wrapper">
                <Box className="member-dedicated-card__name-wrapper">
                  <Typography className="member-dedicated-card__name">
                    John Doe
                  </Typography>
                  <Typography className="member-dedicated-card__title">
                    Sr. Developer
                  </Typography>
                </Box>
                <Box className="member-dedicated-card__link-container">
                  <IconButton
                    className="member-dedicated-card__link"
                    aria-label="linkedin link"
                    href={''}
                  >
                    <svg className="member-dedicated-card__icon">
                      <use
                        xlinkHref={`/assets/github-linkedin-color.svg#linkedin`}
                      ></use>
                    </svg>
                  </IconButton>

                  <IconButton
                    className="member-dedicated-card__link"
                    aria-label="github link"
                    href={''}
                  >
                    <svg className="member-dedicated-card__icon">
                      <use
                        xlinkHref={`/assets/github-linkedin-color.svg#github`}
                      ></use>
                    </svg>
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="member-dedicated-card__text-container">
            <Box className="member-dedicated-card__text-wrapper">
              <Typography className="member-dedicated-card__heading">
                Meet John Doe
              </Typography>
              <Typography className="member-dedicated-card__text">
                As a passsionate software engineer, Glauber has developed a
                strong foundation in various programming languages and
                technologies by designing and developing applications from
                ground up while leading teams to success. About 9 months ago, he
                embarked on a career transition into Machine Learning, driven by
                passion for innovation, problem solving and influenced by his
                previous experience with VR/AR and game development. Glauber is
                eager to contribute his skills cutting-edge machine learning
                projects.
              </Typography>
            </Box>
            <Box className="member-dedicated-card__text-wrapper">
              <Typography className="member-dedicated-card__heading">
                “Why did I join Code For BC?”
              </Typography>
              <Typography className="member-dedicated-card__text">
                As I learned about Code for BC's values and mission, I felt
                greatly complelled to pursue the opportunity and offer
                collaboration, bringing the best I can offer to the team. I'm
                honoured to have been offered a Machine Learning Engineer role
                which is the next chapter in my career. By leveraging my skills
                and expertise as well as advocating for teamwork culture, I
                believe I can give back to the community while setting our team
                up for success.
              </Typography>
            </Box>
          </Box>
        </Container>
        <Button className="member-dedicated-page__slide-button">
          <svg
            className="member-dedicated-page__slide-button-icon"
            viewBox="0 0 16 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.79999 2.5L13.8 14.5L1.79999 26.5"
              stroke="#327CE0"
              stroke-width="3.34"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </Box>
    </div>
  );
}
