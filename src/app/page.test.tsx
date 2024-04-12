import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home, { metadata } from './page';

jest.mock('./_component/home-page', () => {
  return {
    HomePage: () => <div data-testid="mock-home-page">Mock Home Page</div>,
  };
});

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('renders HomePage component', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('mock-home-page')).toBeInTheDocument();
  });

  it('checks metadata', () => {
    expect(metadata).toHaveProperty('title', 'Home | CodeForBC');
    expect(metadata).toHaveProperty(
      'description',
      'Be a Force for Good in BC!'
    );
  });
});
