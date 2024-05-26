import About from '@/app/about/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('About Page', () => {
  it('should render title', async () => {
    // About is an async component, so we need to await it
    render(await About());
    const title = screen.getByRole('heading', { name: 'Meet Our Team' });
    expect(title).toBeInTheDocument();
  });
});
