import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import React from 'react';

export default async function Project({
  params,
}: {
  params: { project_id: string };
}) {
  const allProjectData = await getLocalProjectData();

  const projectData = allProjectData[params.project_id];

  return <section>{params.project_id}</section>;
}
