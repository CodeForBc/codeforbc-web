import Banner from '@/components/banner/banner';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Banner component', () => {
  it('renders banner heading', () => {
    render(<Banner />);
    const bannerHeading = screen.getByRole('heading', {
      name: 'Be a Force For Good in BC!',
    });
    expect(bannerHeading).toBeInTheDocument();
  });

  it('renders banner text', () => {
    render(<Banner />);
    const bannerText = screen.getByText(
      /Do you have design, writing, or coding skills?/i
    );
    expect(bannerText).toBeInTheDocument();
  });

  it('renders banner image', () => {
    render(<Banner />);
    const bannerImage = screen.getByAltText('banner image');
    expect(bannerImage).toBeInTheDocument();
  });
});
