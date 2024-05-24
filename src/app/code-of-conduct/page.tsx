import { Box, Container, Typography } from '@mui/material';
import './code-of-conduct.scss';

export default function CodeOfConduct() {
  return (
    <Container className="code-of-conduct">
      <Box className="code-of-conduct__heading-container">
        <Typography variant="h1" className="page-heading">
          CodeForBC is a space for everyone.
        </Typography>
      </Box>
      <Box className="code-of-conduct__main-wrapper">
        <Box className="code-of-conduct__wrapper">
          <Typography variant="h2" className="code-of-conduct__sub-heading">
            Our Commitment
          </Typography>
          <Typography variant="body2" className="code-of-conduct__text">
            OpenBC is a volunteer-driven organization committed to leveraging
            technology for the betterment of British Columbia. We aim to create
            a positive impact and contribute to our community's growth and
            development through technology, collaboration, and innovation. Below
            is the full text of the OpenBC Code of Conduct. For any questions or
            clarifications regarding this Code of Conduct, please feel free to
            reach out
          </Typography>
        </Box>
        <Box className="code-of-conduct__wrapper">
          <Typography variant="h2" className="code-of-conduct__sub-heading">
            Code of Conduct
          </Typography>
          <Typography variant="body2" className="code-of-conduct__text">
            In all OpenBC activities, events, and digital forums, we expect
            participants to:
          </Typography>
          <ol className="code-of-conduct__list">
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Foster a Safe and Respectful Environment:</strong> We
                are committed to creating a space where every participant feels
                safe, respected, and free to express their identity without fear
                of discrimination or harassment.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Embrace Diversity and Inclusion:</strong> We value
                diverse ideas, skills, and contributions, encouraging
                participation from everyone, especially those traditionally
                marginalized in tech and civic processes.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Promote Positive Interaction:</strong> We advocate for
                inclusive language, a "yes/and" approach in discussions, and
                encourage listening and balanced participation.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Support Community Collaboration:</strong> Our focus is
                on building open and freely available tools for public use, with
                an emphasis on public benefit rather than private gain.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Encourage Active Participation:</strong> We welcome
                participants from all backgrounds and skill levels, fostering an
                environment of questions, mentorship, and knowledge sharing.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                <strong>Maintain Professional and Ethical Standards:</strong> We
                ensure respectful and participatory interactions within our
                community and with our partners
              </Typography>
            </li>
          </ol>
        </Box>
        <Box className="code-of-conduct__wrapper">
          <Typography variant="h2" className="code-of-conduct__sub-heading">
            Anti-Harassment Policy
          </Typography>
          <Typography variant="body2" className="code-of-conduct__text">
            OpenBC is committed to a harassment-free experience for everyone,
            regardless of identity. We do not tolerate harassment in any form,
            including but not limited to:
          </Typography>
        </Box>
        <Box className="code-of-conduct__wrapper">
          <Typography variant="h2" className="code-of-conduct__sub-heading">
            Reporting and Enforcement
          </Typography>
          <Typography variant="body2" className="code-of-conduct__text">
            Participants exhibiting harassing behavior are expected to comply
            immediately upon request to stop. OpenBC organizers may take actions
            like warning or expulsion from events and forums.
          </Typography>
          <Typography
            variant="h3"
            className="code-of-conduct__tertiary-heading"
          >
            In Case of Harassment:
          </Typography>
          <ul className="code-of-conduct__list">
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                In emergencies, call 911 or remove yourself from the situation.
              </Typography>
            </li>
            <li className="code-of-conduct__list-item">
              <Typography
                variant="body2"
                className="code-of-conduct__list-text"
              >
                Contact OpenBC leadership at openbc.ca@gmail.com
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Container>
  );
}
