import headerData from '@/components/header/header-data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);

    const header = screen.getByRole('navigation');
    expect(header).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    render(<Header />);

    headerData.forEach((tab) => {
      const navLink = screen.getByRole('link', {
        name: tab.label,
      });
      expect(navLink).toBeInTheDocument();
    });
  });

  it('should have unique href values in headerData', () => {
    const hrefSet = new Set<string>();
    let hasDuplicate = false;

    headerData.forEach((tab) => {
      if (hrefSet.has(tab.href)) {
        hasDuplicate = true;
      }

      hrefSet.add(tab.href);
    });

    expect(hasDuplicate).toBe(false);
  });
});
