import PrivacyPolicy from '@/app/privacy-policy/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Privacy Policy Page', () => {
  it('should render title', () => {
    render(<PrivacyPolicy />);
    const title = screen.getByText('Privacy Policy');
    expect(title).toBeInTheDocument();
  });
});
