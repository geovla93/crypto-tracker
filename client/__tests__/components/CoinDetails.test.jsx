import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CoinDetails from '../../src/components/CoinDetails';

const mockCoin = {
  id: 'bitcoin',
  name: 'Bitcoin',
  symbol: 'btc',
  high24h: 100,
  low24h: 50,
  currentPrice: 75,
  priceChangePercentage24h: 10,
  rank: 1,
};

describe('CoinDetails', () => {
  it('renders the correct class names', () => {
    const { container } = render(<CoinDetails coin={mockCoin} />);
    expect(container.firstChild).toHaveClass(
      'group cursor-pointer border border-gray-700 transition-colors even:bg-gray-800 hover:bg-slate-800/80',
    );
  });

  it('should render 6 table cells, 1 th with scope=row and 5 td', () => {
    const { container } = render(<CoinDetails coin={mockCoin} />);
    expect(container.querySelectorAll('td').length).toBe(5);
    expect(container.querySelectorAll('th').length).toBe(1);
    expect(container.querySelectorAll('th')[0]).toHaveAttribute('scope', 'row');
  });
});
