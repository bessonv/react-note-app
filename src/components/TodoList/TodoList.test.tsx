import { screen } from '@testing-library/react';
import TodoList from './TodoList';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

describe("TodoList component", () => {
  test('should render component correctly', () => {

    customRender(<TodoList data={mockData} />, mockDataProps);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  test('should show empty message', () => {

    const emptyDataProps = {
      ...mockDataProps, initialList: { data: [], currentTodoItem: null }
    }
    customRender(<TodoList data={[]} />, emptyDataProps);

    const message = screen.queryByText('The list is empty');
    expect(message).toBeInTheDocument();
  });
});
