import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import { redirect } from 'next/navigation';
import './member.scss';
import MemberDedicatedPageClient from './page.client';

interface TeamMember {
  name: string;
  job_title: string;
  bio?: string;
  linkedin_link: string;
  github_link?: string;
  role: string[];
  profile_image_link: string;
  brief_descriptions?: string;
  member_key: string;
  join_CodeForBC?: string;
}

interface MemberPageParams {
  params: {
    team_member_id: string;
  };
}

export async function generateStaticParams() {
  const members = await getTeamMemberData();
  return members.map((member: TeamMember) => ({
    memberKey: member.member_key,
  }));
}

export default async function MemberDedicatedPage({
  params,
}: MemberPageParams) {
  const members: TeamMember[] = await getTeamMemberData();

  const currentMemberIndex = members.findIndex(
    (m) => m.member_key === params.team_member_id
  );

  if (currentMemberIndex === -1) {
    redirect('/our-team');
  }

  const member = members[currentMemberIndex];

  const prevMember =
    members[(currentMemberIndex - 1 + members.length) % members.length];
  const nextMember = members[(currentMemberIndex + 1) % members.length];

  return (
    <MemberDedicatedPageClient
      member={member}
      prevMember={prevMember}
      nextMember={nextMember}
    />
  );
}
