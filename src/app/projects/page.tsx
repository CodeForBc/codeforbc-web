import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material';
import { Metadata } from 'next';

import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project-card/project-card';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import getProjectStatusColor from '@/utils/get-project-status-color/get-project-status-color';
import './projects.scss';

export const metadata: Metadata = {
  title: 'Projects | CodeForBC',
  description: 'A list of projects created by CodeForBC',
};

export default async function Projects() {
  const localProjectData = await getLocalProjectData();

  return (
    <Container className="project-page-container" component="main">
      <CssBaseline />
      <Box className="project-page">
        <Box className="project-page__banner">
          <Box className="project-page__heading-container">
            <Typography
              className="project-page__heading page-heading"
              variant="h1"
            >
              Our Projects
            </Typography>
            <Typography className="project-page__sub-heading">
              Empowering Local Communities Through Impactful Projects
            </Typography>
          </Box>
          <Box className="project-page__button-container">
            <Button
              className="project-page__button"
              variant="outlined"
              size="large"
              href="mailto:codeforbc@gmail.com"
            >
              Propose A Project
            </Button>
            <Button
              className="project-page__button"
              variant="contained"
              size="large"
              href="https://tally.so/embed/3jMe1x"
            >
              Join Us
            </Button>
          </Box>
        </Box>

        <Container className="project-page__cards-container">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {Object.keys(localProjectData).map((projectKey: string) => {
              const project: ProjectInterface = localProjectData[projectKey];
              return (
                <Grid
                  item
                  className="project-page__item"
                  key={project.title}
                  xs={12}
                  sm={12}
                  md={6}
                >
                  <Chip
                    className="project-page__status-label"
                    label={project.status}
                    sx={{
                      bgcolor: getProjectStatusColor(project.status),
                    }}
                  />
                  <Project
                    title={project.title}
                    description={project.description}
                    projectLead={project.projectLead}
                    links={project.links}
                    tools={project.tools}
                    languages={project.languages}
                    technologies={project.technologies}
                    programAreas={project.programAreas}
                    projectImage={project.projectImage}
                    projectKey={projectKey}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
