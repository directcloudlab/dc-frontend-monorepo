import React from 'react';
import { render, screen } from '@testing-library/react';
import GoodButton from './GoodButton';

describe('GoodButton', () => {
  it('renders without crashing', () => {
    render(<GoodButton />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('renders with custom children', () => {
    render(<GoodButton>Click me</GoodButton>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('renders with default text when no children provided', () => {
    render(<GoodButton />);
    expect(screen.getByText('Good Button')).toBeDefined();
  });

  it('applies custom className', () => {
    const { container } = render(<GoodButton className="custom-class">Test</GoodButton>);
    const button = container.querySelector('button');
    expect(button?.className).toContain('custom-class');
  });
});
