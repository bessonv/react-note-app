import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  test('should render header', () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });
});
