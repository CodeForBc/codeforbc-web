import { Link as LinkInterface } from '@/app/dataModels/link';
import { Project as ProjectInterface } from '@/app/dataModels/project';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import './project.scss';

function ProjectBanner(projectData: ProjectInterface) {
  const { description, title, projectImage, status } = projectData;
  return (
    <section>
      <div className="project-banner">
        <div className="project-banner__body">
          <div className="project-banner__status">{status}</div>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button
            className="join-us__button"
            variant="contained"
            size="large"
            href="https://tally.so/embed/w4207A"
          >
            Join Us
          </Button>
        </div>
        <div className="project-banner__image">
          <Image
            src={projectImage}
            alt="CodeForBC banner image"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectOverview(projectData: ProjectInterface) {
  const { projectOverview } = projectData;
  const { lookingFor, problemStatement, projectObjectives, projectLead } =
    projectOverview;
  return (
    <section>
      <div className="project-page-overview">
        <h1>Project Overview</h1>
        <div className="descriptor">
          <h2>Problem Statement</h2>
          <p>{problemStatement}</p>
        </div>
        <div className="descriptor">
          <h2>Project Objectives</h2>
          <p>{projectObjectives}</p>
        </div>
        <div className="descriptor">
          <h2>Project Lead</h2>
          <p>{projectLead}</p>
        </div>
        {lookingFor.length > 0 && (
          <>
            <h2>We Are Looking For</h2>
            <div className="looking-for-container">
              {lookingFor.map((item: string, idx: number) => (
                <span
                  className="looking-for-item"
                  key={`looking-for-item-${idx}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function Technologies(projectData: ProjectInterface) {
  const { languages, links, tools } = projectData;

  return (
    <section>
      <div>
        <h1>Technologies Used</h1>
        <div className="descriptor">
          <h2>Languages</h2>
          <p>{languages?.join(', ')}</p>
        </div>
        <div className="descriptor">
          <h2>Tools</h2>
          <p>{tools?.join(', ')}</p>
        </div>
        <div className="descriptor">
          <h2>Links</h2>
          {links.map((link: LinkInterface, idx: number) => (
            <Link href={link.url} key={`project-link-${idx}`}>
              <Image
                src="/assets/github-mark.svg"
                alt={link.title}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function Project({
  params,
}: {
  params: { project_id: string };
}) {
  const allProjectData = await getLocalProjectData();

  const projectData = allProjectData[params.project_id];

  if (!projectData) {
    redirect('/projects');
  }

  return (
    <Container maxWidth="lg" className="project-box">
      {ProjectBanner(projectData)}
      {ProjectOverview(projectData)}
      {Technologies(projectData)}
    </Container>
  );
}
