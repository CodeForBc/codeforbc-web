import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import AboutClient from './page.client';

import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: 'About Us | CodeForBC',
  description: 'A summary of the vision and team at CodeForBC',
};

export default async function About() {
  const teamMemberData = await getTeamMemberData();

  return <AboutClient teamMemberData={teamMemberData} />;
}
