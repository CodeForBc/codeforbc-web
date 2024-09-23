import { getTeamMemberData } from '@/utils/get-team-members-data/get-team-members-data';
import { redirect } from 'next/navigation';
import './member.scss';
import MemberDedicatedPageClient, { TeamMember } from './page.client';

interface MemberPageParams {
  params: {
    team_member_id: string;
  };
}

export async function generateStaticParams(): Promise<
  { team_member_id: string }[]
> {
  const members = await getTeamMemberData();
  return members.map((member: TeamMember) => ({
    team_member_id: member.member_key,
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
