import axios from 'axios';
import {
  getAxiosInstance,
  getRepositoryInformation,
  getRepositoryList,
} from '../client-services/github.client-service';

jest.mock('axios');

describe('Github client service test', () => {
  const accessToken = 'testToken';
  const mockResponse = {
    data: [{ name: 'codeforbc-web' }],
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv, GITHUB_API_KEY: 'testApiKey' };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('getAxiosInstance', () => {
    it('should return an Axios instance', () => {
      axios.create = jest.fn().mockReturnValue(mockResponse);
      const axiosInstance = getAxiosInstance();

      expect(axiosInstance).toEqual(mockResponse);
    });

    it('should throw error if Github access token is not provided', () => {
      process.env.GITHUB_API_KEY = undefined;
      axios.create = jest.fn().mockReturnValue(mockResponse);
      try {
        getAxiosInstance();
      } catch (error) {
        let message;
        // Specify message only when error type is defined as Error
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }

        expect(message).toBe('GitHub access token is not provided.');
      }
    });
  });

  describe('getRepositoryList', () => {
    it('should get the list of repositories', async () => {
      axios.create = jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const reposListResponse = await getRepositoryList();

      expect(reposListResponse).toEqual(mockResponse);
    });
  });

  describe('getRepositoryInformation', () => {
    it('should get codeforbc-web repo info', async () => {
      const repositoryName = 'codeforbc-web';
      const parameter = '';

      axios.create = jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValueOnce(mockResponse),
      });
      const testRepoResponse = await getRepositoryInformation(
        repositoryName,
        parameter
      );

      expect(testRepoResponse).toEqual(mockResponse);
    });
  });
});
