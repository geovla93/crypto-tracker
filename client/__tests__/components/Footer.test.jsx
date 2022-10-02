import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from '../../src/components/Footer';

describe('Footer', () => {
  it('should render the link to CoinGecko', () => {
    render(<Footer />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.coingecko.com/en/api',
    );
  });
});
