import { promises as fsPromises } from 'fs';

export async function getTeamMemberData() {
  const teamMemberDataJson = await fsPromises.readFile(
    process.cwd() + '/src/json/team-members.json',
    'utf8'
  );
  const teamMembersData = JSON.parse(teamMemberDataJson);

  return teamMembersData;
}
