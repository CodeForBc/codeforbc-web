import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import AboutClient from './page.client';

import { Metadata } from 'next';

import React from 'react';
import './our-team.scss';

interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  profile_image_link?: string;
}

export const metadata: Metadata = {
  title: 'Meet Our Team | CodeForBC',
  description:
    'Meet the team members driving innovation and community impact at CodeForBC.',
};

export default async function OurTeam() {
  const teamMemberData = await getTeamMemberData();

  return <AboutClient teamMemberData={teamMemberData} />;
}
