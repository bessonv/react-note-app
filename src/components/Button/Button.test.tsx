import { screen, render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe("Button component", () => {
  test('should render component correctly', () => {
    render(<Button size="medium">Test</Button>);

    const button = screen.getByRole("button", { name: 'Test'} );
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} size="medium">Test</Button>);
    const button = screen.getByRole("button", { name: 'Test'} );
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
