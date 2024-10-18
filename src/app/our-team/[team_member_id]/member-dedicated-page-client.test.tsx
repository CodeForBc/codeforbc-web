import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MemberDedicatedPageClient, { TeamMember } from './page.client';

const mockMember: TeamMember = {
  name: 'Ahmad',
  job_title: 'Full Stack Developer',
  linkedin_link: 'https://linkedin.com/in/ahmadrashidakhtar',
  github_link: 'https://github.com/unknown-0perator',
  role: ['Developer'],
  profile_image_link: '/profile.jpg',
  brief_descriptions: 'Ahmad is a full stack developer.',
  member_key: 'john-doe',
  join_CodeForBC: 'I joined to contribute to open-source projects.',
};

const mockPrevMember: TeamMember = {
  name: 'Ahmad Akhtar',
  job_title: 'Full Stack Developer',
  linkedin_link: 'https://linkedin.com/in/ahmadrashidakhtar',
  github_link: 'https://github.com/unknown-0perator',
  role: ['Developer'],
  profile_image_link: '/profile1.jpg',
  brief_descriptions: 'Ahmad is a full stack developer.',
  member_key: 'john-doe2',
  join_CodeForBC: 'I joined to contribute to open-source projects.',
};

const mockNextMember: TeamMember = {
  name: 'Ahmad Akhtar',
  job_title: 'Software Engineer',
  linkedin_link: 'https://linkedin.com/in/ahmadrashidakhtar',
  github_link: 'https://github.com/unknown-0perator',
  role: ['Developer'],
  profile_image_link: '/profile2.jpg',
  brief_descriptions: 'Ahmad is a full stack developer.',
  member_key: 'john-doe',
  join_CodeForBC: 'I joined to contribute to open-source projects.',
};

describe('Member Dedicated Page', () => {
  it('should render the member information correctly', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const name = screen.getByRole('heading', {
      level: 1,
      name: mockMember.name,
    });
    expect(name).toBeInTheDocument();
    const jobTitle = screen.getByText(mockMember.job_title);
    expect(jobTitle).toBeInTheDocument();
    const description = screen.getByText(
      mockMember.brief_descriptions as string
    );
    expect(description).toBeInTheDocument();
    const joinReason = screen.getByText(mockMember.join_CodeForBC as string);
    expect(joinReason).toBeInTheDocument();
  });

  it("should display the member's profile image", () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const profileImage = screen.getByAltText("Ahmad's profile");
    expect(profileImage).toBeInTheDocument();
  });

  it('should display LinkedIn and Github links', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const linkedinLink = screen.getByLabelText('LinkedIn link');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', mockMember.linkedin_link);
    const githubLink = screen.getByLabelText('GitHub link');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockMember.github_link);
  });

  it('should not display Github links if github_link is not present', () => {
    const memberWithoutGithub = {
      ...mockMember,
      github_link: undefined,
    };
    render(
      <MemberDedicatedPageClient
        member={memberWithoutGithub}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );

    const githubLink = screen.queryByLabelText('GitHub link');
    expect(githubLink).not.toBeInTheDocument();
  });

  it('should not render join CodeForBC when not present', () => {
    const memberWithoutJoinReason = {
      ...mockMember,
      join_CodeForBC: undefined,
    };
    render(
      <MemberDedicatedPageClient
        member={memberWithoutJoinReason}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    expect(
      screen.queryByText('Why did I join Code For BC?')
    ).not.toBeInTheDocument();
  });

  it('should initialize previous and next hovered member images to null', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    expect(
      screen.queryByAltText('Hovered Member Image')
    ).not.toBeInTheDocument();
  });

  it('should display the previous member on hover', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const prevButton = screen.getByLabelText('Previous Member');
    fireEvent.mouseEnter(prevButton);
    const hoverImage = screen.queryByAltText('Hovered Member Image');
    expect(hoverImage).toBeInTheDocument();
    fireEvent.mouseLeave(prevButton);
    expect(hoverImage).not.toBeInTheDocument();
  });

  it('should display the next member on hover', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const nextButton = screen.getByLabelText('Next Member');
    fireEvent.mouseEnter(nextButton);
    const hoverImage = screen.queryByAltText('Hovered Member Image');
    expect(hoverImage).toBeInTheDocument();
    fireEvent.mouseLeave(nextButton);
    expect(hoverImage).not.toBeInTheDocument();
  });

  it('should render the back button', () => {
    render(
      <MemberDedicatedPageClient
        member={mockMember}
        prevMember={mockPrevMember}
        nextMember={mockNextMember}
      />
    );
    const backButton = screen.getByRole('link', { name: 'Back to Team' });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/our-team');
  });
});
