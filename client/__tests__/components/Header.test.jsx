import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../src/components/Header';

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />);
    expect(screen.getByText('CryptoTracker')).toBeInTheDocument();
  });
});
