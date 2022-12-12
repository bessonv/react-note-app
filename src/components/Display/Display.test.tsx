import { screen } from '@testing-library/react';
import Display from './Display';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

const dataItem = mockData[0];

describe("Display component", () => {
  test('should render component correctly', () => {

    customRender(<Display data={dataItem}/>, mockDataProps);

    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();

    const error = screen.queryByText('Empty object');
    expect(error).not.toBeInTheDocument();
  });

  test('should show error message', () => {
    customRender(<Display />, mockDataProps);

    const error = screen.getByText('Empty object');
    expect(error).toBeInTheDocument();
  });
});
