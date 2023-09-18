import { render, screen } from '@testing-library/react';
import Preloader from './Preloader';

describe("App component", () => {
  test('should render loading', () => {
    render(<Preloader show={false}><p>This is a test</p></Preloader>);
    const loading = screen.getByText('Loading');
    expect(loading).toBeInTheDocument();
  });

  test('should render children', () => {
    render(<Preloader show={true}><p>This is a test</p></Preloader>);
    const children = screen.getByText('This is a test');
    expect(children).toBeInTheDocument();
  });
});
