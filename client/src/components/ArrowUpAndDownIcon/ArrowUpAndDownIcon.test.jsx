import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArrowUpAndDownIcon from './ArrowUpAndDownIcon';

describe('ArrowUpAndDownIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArrowUpAndDownIcon />);
    }).not.toThrow();
  });

  it('renders the correct class names', () => {
    const { container } = render(<ArrowUpAndDownIcon />);
    expect(container.firstChild).toHaveClass('ml-1 h-3 w-3');
  });

  it('renders the correct class names when className is passed', () => {
    const { container } = render(<ArrowUpAndDownIcon className="test" />);
    expect(container.firstChild).toHaveClass('ml-1 h-3 w-3 test');
  });

  it('renders the correct class names when onClick is passed', () => {
    const { container } = render(<ArrowUpAndDownIcon onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('ml-1 h-3 w-3');
  });
});
