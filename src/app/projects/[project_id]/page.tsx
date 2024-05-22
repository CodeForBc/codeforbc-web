import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { redirect } from 'next/navigation';
import React from 'react';

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

  return <section>{params.project_id}</section>;
}
