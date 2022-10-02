// Create unit tests for the Layout component
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '../../src/components/Layout';

describe('Layout', () => {
  it('should render the Header and Footer components', () => {
    const { container } = render(<Layout />);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
