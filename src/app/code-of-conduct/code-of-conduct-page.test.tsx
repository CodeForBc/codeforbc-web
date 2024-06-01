import CodeOfConduct from '@/app/code-of-conduct/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Code of Conduct Page', () => {
  it('should render title', () => {
    render(<CodeOfConduct />);
    const title = screen.getByText('CodeForBC is a space for everyone.');
    expect(title).toBeInTheDocument();
  });
});
