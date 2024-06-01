import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MissionOverview from './mission-overview';

describe('MissionOverview Component', () => {
  it('should render the mission image', () => {
    render(<MissionOverview />);
    const image = screen.getByAltText('Description');
    expect(image).toBeInTheDocument();
  });

  it('should render the mission heading', () => {
    render(<MissionOverview />);
    const heading = screen.getByText('Our Mission');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  it('should render the mission text', () => {
    render(<MissionOverview />);
    const text = screen.getByText(
      /At CodeForBC, our mission is to bring together individuals/i
    );
    expect(text).toBeInTheDocument();
  });

  it('should render the learn more link', () => {
    render(
      <MissionOverview>
        <a href="/join-us">Learn More</a>
      </MissionOverview>
    );
    const link = screen.getByRole('link', { name: /learn more/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/join-us');
  });
});
