import { Link as LinkInterface } from '@/app/dataModels/link';
import { Project as ProjectInterface } from '@/app/dataModels/project';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import './project.scss';

function Technologies(projectData: ProjectInterface) {
  const { languages, links, tools } = projectData;

  return (
    <section>
      <div>
        <h1>Technologies Used</h1>
        <h2>Languages</h2>
        <p>{languages?.join(', ')}</p>
        <h2>Tools</h2>
        <p>{tools?.join(', ')}</p>
        <h2>Links</h2>
        {links.map((link: LinkInterface, idx: number) => (
          <IconButton href={link.url} key={`project-link-${idx}`}>
            <Image
              src="/assets/github-mark.svg"
              alt={link.title}
              width={20}
              height={20}
            />
          </IconButton>
        ))}
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

  return <main>{Technologies(projectData)}</main>;
}
