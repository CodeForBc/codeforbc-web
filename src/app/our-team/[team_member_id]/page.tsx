import { Box, Container, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import './member.scss';

export default function MemberDedicatedPage() {
  return (
    <div className="member-dedicated-page">
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
              width={420}
              height={420}
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
              As a passsionate software engineer, Glauber has developed a strong
              foundation in various programming languages and technologies by
              designing and developing applications from ground up while leading
              teams to success. About 9 months ago, he embarked on a career
              transition into Machine Learning, driven by passion for
              innovation, problem solving and influenced by his previous
              experience with VR/AR and game development. Glauber is eager to
              contribute his skills cutting-edge machine learning projects.
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
              believe I can give back to the community while setting our team up
              for success.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
