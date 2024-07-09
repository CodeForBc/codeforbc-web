import AboutUs from '@/app/about-us/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('About Page', () => {
  it('should render title', () => {
    render(<AboutUs />);
    const subTitle = screen.getByRole('heading', { name: 'Our Mission' });
    expect(subTitle).toBeInTheDocument();
  });
});
