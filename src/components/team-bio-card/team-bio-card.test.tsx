import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TeamBioCard from './team-bio-card';

describe('TeamBioCard Component', () => {
  interface TeamMember {
    name: string;
    job_title: string;
    bio?: string;
    linkedin_link: string;
    github_link?: string;
    profile_image_link: string;
    brief_descriptions?: string;
  }
  const mockData: TeamMember = {
    name: 'Sam Huo',
    job_title: 'Founder/President',
    linkedin_link: 'https://www.linkedin.com/in/sam-huo-23358233/',
    github_link: 'https://github.com/SamHuo213',
    brief_descriptions: 'Founder of CodeForBC',
    profile_image_link: '/assets/team-members/sam_huo.jpeg',
  };

  test('renders the profile image correctly', () => {
    render(<TeamBioCard data={mockData} />);
    const profileImage = screen.getByAltText('profile');
    expect(profileImage).toBeInTheDocument();
  });

  test('renders the name and job title correctly', () => {
    render(<TeamBioCard data={mockData} />);
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.job_title)).toBeInTheDocument();
  });

  test('renders the brief description', () => {
    render(<TeamBioCard data={mockData} />);
    expect(screen.getByText(mockData.brief_descriptions!)).toBeInTheDocument();
  });

  test('renders the LinkedIn link correctly', () => {
    render(<TeamBioCard data={mockData} />);
    const linkedInLink = screen.getByRole('link', { name: 'linkedin link' });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', mockData.linkedin_link);
  });

  test('renders the GitHub link when provided', () => {
    render(<TeamBioCard data={mockData} />);
    const githubLink = screen.getByRole('link', { name: 'github link' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockData.github_link);
  });
});
