import axios, { AxiosInstance, AxiosResponse } from 'axios';

export function getAxiosInstance(): AxiosInstance {
  const accessToken: string | undefined = process.env.GITHUB_API_KEY;

  if (!accessToken) {
    throw new Error('GitHub access token is not provided.');
  }

  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return axiosInstance;
}

export async function getRepositoryList(): Promise<AxiosResponse> {
  const response: AxiosResponse = await getAxiosInstance().get(
    '/orgs/CodeForBc/repos'
  );
  return response;
}

export async function getRepositoryInformation(
  repositoryName: string,
  parameter = ''
): Promise<AxiosResponse> {
  const response = await getAxiosInstance().get(
    `/repos/CodeForBc/${repositoryName}${parameter}`
  );
  return response;
}
