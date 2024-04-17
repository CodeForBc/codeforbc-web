import {
  Box,
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
    <Container className="projects-container" component="main">
      <CssBaseline />
      <Box>
        <Typography
          className="projects-heading"
          variant="h4"
          sx={{ fontWeight: '700' }}
        >
          Our Projects
        </Typography>
        <Container className="projects-cards">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {localProjectData.map((project: ProjectInterface) => (
              <Grid
                item
                className="project-card-item"
                key={project.title}
                xs={12}
                sm={6}
                md={4}
              >
                <Chip
                  className="project-card-status-label"
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
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
