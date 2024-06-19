import headerData from '@/components/header/header-data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    render(<Header />);

    const projectNav = screen.getByRole('link', {
      name: 'Our Projects',
    });
    const joinUsNav = screen.getByRole('link', {
      name: 'Join Us!',
    });
    const aboutNav = screen.getByRole('link', {
      name: 'Who We Are',
    });

    expect(projectNav).toBeInTheDocument();
    expect(joinUsNav).toBeInTheDocument();
    expect(aboutNav).toBeInTheDocument();
  });

  it('should have unique href values in headerData', () => {
    const hrefSet = new Set<string>();
    let hasDuplicate = false;

    headerData.forEach((tab: any) => {
      if (hrefSet.has(tab.href)) {
        hasDuplicate = true;
      }

      hrefSet.add(tab.href);
    });

    expect(hasDuplicate).toBe(false);
  });
});
