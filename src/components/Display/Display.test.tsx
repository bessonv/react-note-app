import { screen } from '@testing-library/react';
import Display from './Display';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import userEvent from '@testing-library/user-event';

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

  test('should show edit info on edit button click', async () => {
    const showEditTodo = jest.fn();
    const mockProps = { ...mockDataProps, functions: { showEditTodo }};
    customRender(<Display data={dataItem} />, mockProps);

    const editButton = screen.getByRole('button');
    await userEvent.click(editButton);
    expect(showEditTodo).toHaveBeenCalledWith(dataItem.key);
  })
});
